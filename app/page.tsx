import Link from "next/link"
import { ArrowRight, Code, CodeSquare, Layout, LogsIcon, Settings2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import { getFeaturedProjects } from "@/data/projects"
import { services } from "@/data/services"

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  // Map icon names to actual components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Logs":
        return LogsIcon
      case "Code":
        return CodeSquare
      case "Setting":
        return Settings2
      default:
        return Code
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hi, I'm Satish Maharjan
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I'm a passionate Quality Assurance Engineer focused on ensuring software is reliable, effiecient and user-friendly.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/projects">
                  <Button className="px-6">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-6">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="What I Do"
              description="I specialize manual testing, test automation, project management and love to play and watch football."
            />
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={getIconComponent(service.icon)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Featured Projects" description="Check out some of my recent work" />
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <Button variant="outline">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

