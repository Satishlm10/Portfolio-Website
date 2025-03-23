interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
}

export default function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <div className="rounded-lg border p-6 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">
        {company} • {period}
      </p>
      <p className="mt-4">{description}</p>
    </div>
  )
}

