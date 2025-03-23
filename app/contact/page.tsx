import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Get in Touch"
              description="Have a question or want to work together? Feel free to reach out!"
            />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

