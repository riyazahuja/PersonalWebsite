"use client"

import { publications } from "@/lib/data"
import { ExternalLink, Github, FileText } from "lucide-react"

export default function ResearchSection() {
  const publishedPubs = publications.filter((pub) => !pub.inProgress)
  const inProgressPubs = publications.filter((pub) => pub.inProgress)

  const renderPublicationLinks = (pub: typeof publications[0]) => {
    const links = []
    if (pub.links.paper) {
      links.push({ href: pub.links.paper, icon: FileText, label: "Paper" })
    }
    if (pub.links.website) {
      links.push({ href: pub.links.website, icon: ExternalLink, label: "Website" })
    }
    if (pub.links.github) {
      links.push({ href: pub.links.github, icon: Github, label: "GitHub" })
    }
    return links
  }

  const PublicationItem = ({ pub, faded = false }: { pub: typeof publications[0]; faded?: boolean }) => {
    const links = renderPublicationLinks(pub)

    return (
      <div className={`relative mb-8 ${faded ? "opacity-50" : ""}`}>
        {/* Left margin links - desktop only */}
        <div className="absolute -left-24 top-0 hidden xl:flex flex-col gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>

        {/* Content */}
        <div>
          <h4 className="font-lora text-xl font-semibold text-stagira-indigo mb-1">{pub.title}</h4>
          <p className="text-base leading-relaxed mb-1">{pub.authors}</p>
          <p className="text-base leading-relaxed mb-3">{pub.venue}</p>
          <p className="text-base mb-8 leading-relaxed">{pub.description}</p>

          {/* Inline links - mobile/tablet */}
          {links.length > 0 && (
            <div className="flex xl:hidden gap-4 mt-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover inline-flex items-center gap-1 text-sm"
                  aria-label={link.label}
                >
                  <link.icon size={14} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="research" className="py-16">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">research.</h3>

      <div className="space-y-6 mb-12">
        <p className="text-base mb-8 leading-relaxed">
          My research focuses on automated theorem proving and machine learning for formal mathematics. I'm
          particularly interested in developing AI systems that can assist mathematicians in discovering and
          verifying theorems in interactive proof assistants like Lean 4.
        </p>

        <p className="text-base mb-8 leading-relaxed">
          My work spans reinforcement learning for proof search, proof optimization techniques, and building
          tools that make formal verification more accessible to researchers and practitioners. I believe that
          AI-assisted theorem proving can accelerate mathematical discovery and improve software verification.
        </p>
      </div>

      {/* Published works */}
      <div className="space-y-2">
        {publishedPubs.map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
      </div>

      {/* Divider */}
      {inProgressPubs.length > 0 && (
        <>
          <div className="my-12 border-t border-gray-300"></div>

          {/* In-progress works (faded) */}
          <div className="space-y-2">
            {inProgressPubs.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} faded />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
