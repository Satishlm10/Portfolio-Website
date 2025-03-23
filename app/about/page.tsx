import Image from "next/image"
import { Code, Cloud, Wrench, Settings, Code2, Code2Icon, CodeSquare, Logs } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import SkillCard from "@/components/skill-card"
import ExperienceItem from "@/components/experience-item"
import { skills } from "@/data/skills"
import { experience } from "@/data/experience"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I’m Satish Maharjan, a QA Engineer with a strong foundation in manual and automated testing. Currently completing my Bachelor’s in Computer Science and IT from Tribhuvan University, I’m passionate about ensuring high-quality software that delivers seamless user experiences.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                  Experience in testing, debugging, and ensuring high-quality software delivery. Passionate about maintaining 
                  high standards in every phase of software development.</p>
                  <p>Developing my skills in leading teams, resource allocation, timeline management, and delivering software products on schedule.</p>
                  <p>
                  Strong interpersonal skills to work within cross-functional teams and effectively communicate complex technical concepts to stakeholders.
                  </p>

                  <p>
                    I'm always open to new opportunities and collaborations. Feel free to reach out if you have a
                    project in mind or just want to connect!
                  </p>
                </div>
              </div>
              <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="/aboutme.jpg?height=600&width=600"
                  alt="Satish Maharjan"
                  width={600}
                  height={600}
                  className="mx-auto aspect-square rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading title="My Skills" description="Here are some of the technologies and tools I work with" />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <SkillCard title="Manual Testing" skills={skills.Manual_Testing} icon={Logs} />
              <SkillCard title="Automation" skills={skills.Automation} icon={CodeSquare} />
              <SkillCard title="Project Management" skills={skills.Project_Management} icon={Settings} />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Education & Experience"
              description="My academic background and professional journey"
            />

            <div className="mx-auto max-w-3xl space-y-8 py-12">
              {experience.map((item) => (
                <ExperienceItem
                  key={item.id}
                  title={item.title}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

