import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: LucideIcon
}

export default function SkillCard({ title, skills = [], icon: Icon }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

