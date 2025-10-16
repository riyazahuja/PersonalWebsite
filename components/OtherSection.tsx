"use client"

import { talks, pastWork } from "@/lib/data"
import { ExternalLink } from "lucide-react"

export default function OtherSection() {
  return (
    <section id="other" className="py-16">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">other.</h3>

      {/* Talks subsection */}
      <div className="mb-16">
        <h4 className="font-lora text-xl font-semibold text-stagira-indigo mb-1">talks.</h4>
        <div className="space-y-6">
          {talks.map((talk) => (
            <div key={talk.id} className="relative">
              {/* Left margin link - desktop only */}
              {talk.link && (
                <div className="absolute -left-20 top-0 hidden xl:block">
                  <a
                    href={talk.link}
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
                <h5 className="font-lora text-lg font-semibold text-stagira-indigo mb-1">{talk.venue}</h5>
                <p className="text-base mb-8 leading-relaxed">{talk.title}</p>

                {/* Inline link - mobile/tablet */}
                {talk.link && (
                  <div className="flex xl:hidden mt-2">
                    <a
                      href={talk.link}
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
