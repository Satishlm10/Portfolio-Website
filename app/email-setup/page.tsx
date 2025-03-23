import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EmailSetupGuide from "@/components/email-setup-guide"

export default function EmailSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <EmailSetupGuide />
      </main>
      <Footer />
    </div>
  )
}

