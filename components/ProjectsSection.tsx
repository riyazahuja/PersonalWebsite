"use client"

import { otherProjects } from "@/lib/data"
import { Github } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">other projects.</h3>

      <div className="space-y-8">
        {otherProjects.map((project) => (
          <div key={project.id} className="relative">
            {/* Left margin link - desktop only */}
            <div className="absolute -left-20 top-0 hidden xl:block">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>

            {/* Content */}
            <div>
              <h4 className="font-lora text-xl font-semibold text-stagira-indigo mb-1">{project.title}</h4>
              <p className="text-base mb-8 leading-relaxed">{project.description}</p>

              {/* Inline link - mobile/tablet */}
              <div className="flex xl:hidden mt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover inline-flex items-center gap-1 text-sm"
                  aria-label="GitHub"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
