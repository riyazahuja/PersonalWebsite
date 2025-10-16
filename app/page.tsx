import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import NewsSection from "@/components/NewsSection"
import ResearchSection from "@/components/ResearchSection"
import ProjectsSection from "@/components/ProjectsSection"
import OtherSection from "@/components/OtherSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div id="site-content" className="max-w-3xl mx-auto px-6 lg:px-12 overflow-visible">
        <AboutSection />
        <NewsSection />
        <ResearchSection />
        <ProjectsSection />
        <OtherSection />
      </div>
    </main>
  )
}
