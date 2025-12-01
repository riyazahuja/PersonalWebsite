"use client"

import { talks, pastWork } from "@/lib/data"
import { ExternalLink, Video, FileText } from "lucide-react"

export default function OtherSection() {
  const renderTalkLinks = (talk: typeof talks[0]) => {
    const links: { href: string; icon: typeof Video; label: string }[] = []
    if (talk.links?.video) {
      links.push({ href: talk.links.video, icon: Video, label: "Video" })
    }
    if (talk.links?.slides) {
      links.push({ href: talk.links.slides, icon: FileText, label: "Slides" })
    }
    if (talk.links?.website) {
      links.push({ href: talk.links.website, icon: ExternalLink, label: "Website" })
    }
    if (talk.links?.paper) {
      links.push({ href: talk.links.paper, icon: FileText, label: "Paper" })
    }
    return links
  }

  return (
    <section id="other" className="py-16">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">other.</h3>

      {/* Talks subsection */}
      <div className="mb-16">
        <h4 className="font-lora text-xl font-semibold text-stagira-indigo mb-1">talks.</h4>
        <div className="space-y-6">
          {talks.map((talk) => {
            const links = renderTalkLinks(talk)
            return (
              <div key={talk.id} className="relative">
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
                  <h5 className="font-lora text-lg font-semibold text-stagira-indigo mb-1">{talk.venue}</h5>
                  <p className="text-base mb-8 leading-relaxed">{talk.title}</p>

                  {/* Inline links - mobile/tablet */}
                  {links.length > 0 && (
                    <div className="flex xl:hidden gap-4 mt-2">
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
      </div>

      {/* Past Work subsection */}
      <div>
        <h4 className="font-lora text-xl font-semibold text-stagira-indigo mb-1">past work.</h4>
        <div className="space-y-6">
          {pastWork.map((work) => (
            <div key={work.id} className="relative">
              {/* Left margin link - desktop only */}
              {work.link && (
                <div className="absolute -left-20 top-0 hidden xl:block">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover"
                    aria-label="Link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}

              {/* Content */}
              <div>
                <h5 className="font-lora text-lg font-semibold text-stagira-indigo mb-1">{work.organization}</h5>
                {work.role && <p className="text-base leading-relaxed mb-1">{work.role}</p>}
                {work.description && <p className="text-base mb-8 leading-relaxed">{work.description}</p>}

                {/* Inline link - mobile/tablet */}
                {work.link && (
                  <div className="flex xl:hidden mt-2">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover inline-flex items-center gap-1 text-sm"
                      aria-label="Link"
                    >
                      <ExternalLink size={14} />
                      <span>Link</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
