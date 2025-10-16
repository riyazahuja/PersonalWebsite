"use client"

import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutSection() {
  const socialLinks = [
    { icon: Mail, href: "mailto:riyaz@example.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section id="about" className="py-16">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">about.</h3>



      <div className="relative">
        {/* Left margin links - desktop only */}
        <div className="absolute -left-24 top-0 hidden xl:flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-base mb-8 leading-relaxed">
            I'm a researcher working at the intersection of automated theorem proving and machine learning.
            My work focuses on building AI systems that can assist mathematicians in discovering and verifying
            mathematical theorems, with a particular emphasis on formal verification in Lean 4.
          </p>

          <p className="text-base mb-8 leading-relaxed">
            Currently, I'm affiliated with Carnegie Mellon University, where I work on developing tools and
            frameworks that make formal mathematics more accessible and efficient. My research interests span
            automated reasoning, reinforcement learning for theorem proving, and the intersection of AI and
            formal methods.
          </p>

          <p className="text-base mb-8 leading-relaxed">
            Before diving into automated theorem proving, I worked on educational technology and accessibility
            initiatives. I believe in making advanced mathematical tools and research accessible to a broader
            audience, and I'm passionate about open-source software and collaborative research.
          </p>

          {/* Inline links - mobile/tablet */}
          <div className="flex xl:hidden gap-4 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite-gray hover:text-aureate-gold transition-colors cursor-hover"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
