"use client"

import { Mail, Github, Linkedin, Twitter, FileText } from "lucide-react"

export default function AboutSection() {
  const socialLinks = [
    { icon: Mail, href: "mailto:riyaz@example.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FileText, href: "#", label: "CV" },
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
I'm a fourth year undergraduate at Carnegie Mellon University, double majoring in Mathematics and Computer Science with a <a href="http://coursecatalog.web.cmu.edu/schools-colleges/melloncollegeofscience/departmentofmathematicalsciences/#honorsdegreeprogramtext" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">concurrent master's degree</a> in Mathematics. 
          </p>

            <p className="text-base mb-8 leading-relaxed">
            My primary line of research is on machine learning for mathematics, and more generally, AI for science. I also study higher category theory, homotopical algebra, and type theory. I'm jointly advised by Prof. <a href="https://www.andrew.cmu.edu/user/avigad/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Jeremy Avigad</a>, Prof. <a href="https://wellecks.com/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Sean Welleck</a>, and Prof. <a href="https://tetali.github.io/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Prasad Tetali</a>, and am a researcher in the <a href="https://www.cmu.edu/hoskinson/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Hoskinson Center for Formal Mathematics</a>, the <a href="https://www.lti.cs.cmu.edu/index.html" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Language Technologies Institute</a>, the <a href="https://cmu-l3.github.io/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">L3 Lab</a>, and the <a href="https://www.cmu.edu/news/stories/archives/2025/august/new-nsf-institute-at-cmu-will-help-mathematicians-harness-ai-and-advance-discoveries" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Institute for Computer-Aided Reasoning in Mathematics</a>. I am the cofounder of <a href="https://stagiralabs.com/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Stagira Labs</a>, a research lab focused on using game theory and multi-agent RL to scale AI for scientific discovery. I am also part of the <a href="https://www.cmu.edu/dietrich/philosophy/hott/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Homotopy Type Theory (HoTT)</a> group and the <a href="https://www.cambridge.org/core/books/higher-categories-and-homotopical-algebra/C5509D2179302B3F3876A007815A2BBC" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Higher Category Theory reading group</a> at CMU. Previously, I also worked with Prof. <a href="https://www.poshenloh.com/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Po-Shen Loh</a> on scaling AI-assisted theorem proving on math competition problems at <a href="https://live.poshenloh.com/" target="_blank" rel="noopener noreferrer" className="text-aureate-gold hover:underline">Expii</a>, and ran The Purple Hand, an anti human trafficking nonprofit. 

            </p>

          <p className="text-base mb-8 leading-relaxed">
            Recently, I also won the Richard A. Moore Award and was named an ACS Scholar.
          </p>

          <p className="text-base mb-8 leading-relaxed">
            My Erdos number is 2.
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
