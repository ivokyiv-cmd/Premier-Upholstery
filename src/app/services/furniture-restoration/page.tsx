import { redirect } from 'next/navigation'

// Furniture Restoration объединена с Leather Restoration.
// Старые ссылки автоматически перенаправляются.
export default function FurnitureRestorationRedirect() {
  redirect('/services/leather-restoration')
}
