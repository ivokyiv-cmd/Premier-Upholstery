import { NextResponse } from 'next/server'

// Sends estimate requests by email via Resend (https://resend.com).
// Env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY   — required
//   QUOTE_TO_EMAIL   — where requests go (default: info@premierleatherupholstery.com)
//   QUOTE_FROM_EMAIL — verified sender (default: quotes@premierleatherupholstery.com)

export const runtime = 'nodejs'

const TO = process.env.QUOTE_TO_EMAIL || 'info@premierleatherupholstery.com'
const FROM = process.env.QUOTE_FROM_EMAIL || 'quotes@premierleatherupholstery.com'
const MAX_TOTAL_BYTES = 4 * 1024 * 1024

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
  }

  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  // Honeypot — bots fill hidden fields, humans don't
  if (String(form.get('company') ?? '').trim()) {
    return NextResponse.json({ ok: true })
  }

  const field = (k: string) => String(form.get(k) ?? '').trim().slice(0, 5000)
  const data = {
    name: field('name'),
    phone: field('phone'),
    email: field('email'),
    cityZip: field('cityZip'),
    serviceType: field('serviceType'),
    description: field('description'),
    preferredContact: field('preferredContact'),
  }

  if (!data.name || !data.phone || !/^\S+@\S+\.\S+$/.test(data.email) || !data.description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const attachments: { filename: string; content: string }[] = []
  let total = 0
  for (const entry of form.getAll('photos')) {
    if (typeof entry === 'string') continue
    total += entry.size
    if (total > MAX_TOTAL_BYTES) break
    const buf = Buffer.from(await entry.arrayBuffer())
    attachments.push({ filename: entry.name || `photo-${attachments.length + 1}.jpg`, content: buf.toString('base64') })
  }

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Phone', data.phone],
    ['Email', data.email],
    ['City / ZIP', data.cityZip || '—'],
    ['Service', data.serviceType || '—'],
    ['Preferred contact', data.preferredContact || '—'],
    ['Photos attached', String(attachments.length)],
  ]

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#111;max-width:600px">
      <h2 style="margin:0 0 16px">New Estimate Request</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#666;vertical-align:top;white-space:nowrap"><b>${k}</b></td><td>${escape(v)}</td></tr>`
          )
          .join('')}
      </table>
      <h3 style="margin:20px 0 8px">Description of damage</h3>
      <p style="white-space:pre-wrap;margin:0">${escape(data.description)}</p>
      <p style="margin-top:24px;color:#888;font-size:13px">
        Sent from the estimate form on premierleatherupholstery.com. Reply to this email to answer the customer.
      </p>
    </div>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `Premier Leather Website <${FROM}>`,
      to: [TO],
      reply_to: data.email,
      subject: `New estimate request — ${data.name}${data.serviceType ? ` (${data.serviceType})` : ''}`,
      html,
      attachments,
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    return NextResponse.json({ error: 'Failed to send' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
