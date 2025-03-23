import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  isFeatured?: boolean
}

export default function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  return (
    <div
      id={`project-${project.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
          width={600}
          height={400}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 flex gap-2">
          {isFeatured ? (
            <Link href={`/projects#project-${project.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          ) : (
            <>
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

