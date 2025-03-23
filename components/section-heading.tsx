interface SectionHeadingProps {
  title: string
  description?: string
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="max-w-[85%] text-muted-foreground md:text-xl">{description}</p>}
    </div>
  )
}

