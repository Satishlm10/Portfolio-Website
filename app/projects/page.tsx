import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading title="My Projects" description="A collection of my work, side projects, and experiments" />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Interested in working together?"
              description="I'm always open to discussing new projects and opportunities."
            />
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <Button className="mt-4">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

