"use client"

import { newsItems } from "@/lib/data"
import { ExternalLink } from "lucide-react"

export default function NewsSection() {
  return (
    <section id="news" className="py-16">
      {/* <h3 className="font-lora text-h3 text-stagira-indigo">news</h3> */}

      {/* Top scrolling banner */}
      <div className="relative overflow-hidden bg-transparent border-t border-b border-stagira-indigo py-3 mb-8 -mx-12">
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="text-stagira-indigo text-sm font-bold uppercase tracking-wider">
        {Array(20)
          .fill("breaking news")
          .map((text, i) => (
            <span key={i} className="mx-8">
          {text}
            </span>
          ))}
          </span>
        </div>
      </div>

      {/* News items */}
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="relative">
            {/* Left margin link - desktop only */}
            {item.link && (
              <div className="absolute -left-20 top-0 hidden xl:block">
                <a
                  href={item.link}
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
              <div className="flex gap-4">
                <span className="text-caption text-base mb-8 leading-relaxed whitespace-nowrap">
                  [{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}]
                </span>
                <p className="text-base mb-8 leading-relaxed">{item.description}</p>
              </div>

              {/* Inline link - mobile/tablet */}
              {item.link && (
                <div className="flex xl:hidden mt-2">
                  <a
                    href={item.link}
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

      {/* Bottom scrolling banner - opposite direction */}
      <div className="relative overflow-hidden bg-transparent border-t border-b border-stagira-indigo py-3 mb-8 -mx-12">
        <div className="animate-scroll-right whitespace-nowrap">
          <span className="text-stagira-indigo text-sm font-bold uppercase tracking-wider">
        {Array(20)
          .fill("breaking news")
          .map((text, i) => (
            <span key={i} className="mx-8">
          {text}
            </span>
          ))}
          </span>
        </div>
      </div>
    </section>
  )
}
