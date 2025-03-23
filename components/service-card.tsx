import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
      <div className="rounded-full bg-primary p-3">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  )
}

