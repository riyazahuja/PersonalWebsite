"use client"

import { otherProjects } from "@/lib/data"
import { Github, ExternalLink, Play, FileText } from "lucide-react"

export default function ProjectsSection() {
  const renderProjectLinks = (project: typeof otherProjects[0]) => {
    const links: { href: string; icon: typeof Github; label: string }[] = []
    if (project.links.github) {
      links.push({ href: project.links.github, icon: Github, label: "GitHub" })
    }
    if (project.links.website) {
      links.push({ href: project.links.website, icon: ExternalLink, label: "Website" })
    }
    if (project.links.demo) {
      links.push({ href: project.links.demo, icon: Play, label: "Demo" })
    }
    if (project.links.paper) {
      links.push({ href: project.links.paper, icon: FileText, label: "Paper" })
    }
    return links
  }

  return (
    <section id="projects" className="py-16">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">projects.</h3>

      <div className="space-y-8">
        {otherProjects.map((project) => {
          const links = renderProjectLinks(project)
          return (
            <div key={project.id} className="relative">
              {/* Left margin links - desktop only */}
              <div className="absolute -left-20 top-0 hidden xl:flex flex-col gap-2">
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
                <h4 className="font-lora text-xl font-semibold text-stagira-indigo mb-1">{project.title}</h4>
                <p className="text-base mb-8 leading-relaxed">{project.description}</p>

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
        })}
      </div>
    </section>
  )
}
