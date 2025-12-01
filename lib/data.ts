export interface NewsItem {
  id: string
  date: string
  description: string
  link?: string
}

export interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  description: string
  links: {
    paper?: string
    website?: string
    github?: string
  }
  inProgress?: boolean
}

export interface OtherProject {
  id: string
  title: string
  description: string
  links: {
    github?: string
    website?: string
    demo?: string
    paper?: string
  }
}

export interface Talk {
  id: string
  venue: string
  title: string
  date?: string
  links?: {
    video?: string
    slides?: string
    website?: string
    paper?: string
  }
}

export interface PastWork {
  id: string
  organization: string
  role?: string
  description?: string
  link?: string
}

// ----------------  Personal Portfolio Data  ----------------
export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    date: "2025-11-30",
    description: "cLean milestone report released",
    link: "https://github.com/riyazahuja/clean"
  },
  {
    id: "news-2",
    date: "2025-09-23",
    description: "Named as an ACS Scholar",
    // link: "#"
  },
  {
    id: "news-3",
    date: "2025-09-10",
    description: "Public release of Agora v0.1",
    link: "https://agora.stagiralabs.com"
  },
  {
    id: "news-4",
    date: "2025-04-24",
    description: "Won the Richard A. Moore Award in Mathematical Sciences",
    // link: "#"
  },
  {
    id: "news-5",
    date: "2025-04-24",
    description: "Presented ImProver at ICLR 2025 in Singapore",
    link: "https://iclr.cc/virtual/2025/poster/28980"
  },
  {
    id: "news-6",
    date: "2025-04-07",
    description: "Attended the Simons Institute and SLMath joint workshop on AI for Mathematics",
    link: "https://simons.berkeley.edu/workshops/simons-institute-theory-computing-slmath-joint-workshop-ai-mathematics-theoretical"
  }
]

export const publications: Publication[] = [
  {
    id: "improver",
    title: "ImProver: Agent-Based Automated Proof Optimization",
    authors: "Riyaz Ahuja, Jeremy Avigad, Prasad Tetali, Sean Welleck",
    venue: "ICLR 2025",
    description: "Agentic proof optimization framework for Lean for the rewriting of undergraduate and competition-level theorems.",
    links: {
      paper: "https://arxiv.org/abs/2410.04753",
      github: "https://github.com/riyazahuja/improver"
    }
  },
  {
    id: "improver2",
    title: "ImProver²: Iteratively Self-Improving SLM's for Neurosymbolic Proof Optimization",
    authors: "Riyaz Ahuja, Tate Rowney, Jeremy Avigad, Prasad Tetali, Sean Welleck",
    venue: "In Progress",
    description: "Generalized RL Pipeline for training proof optimizers for the optimization of research-level Lean theorems at scale, across metrics, and at low cost.",
    links: {
      paper: "#",
      github: "https://github.com/riyazahuja/improver"
    },
    inProgress: true
  },
  {
    id: "clean",
    title: "cLean: Verifiable GPU Programming in Lean",
    authors: "Riyaz Ahuja",
    venue: "In Progress",
    description: "Framework for writing, executing, and verifying the safety and correctness of GPU programs in Lean.",
    links: {
      // paper: "#",
      github: "https://github.com/riyazahuja/clean"
    },
    inProgress: true
  },
  {
    id: "agora",
    title: "Agora: Market-Based Multi-Agent Automated Mathematical Discovery",
    authors: "Riyaz Ahuja, Alexander Heckett, Shivansh Gour, Alexander Willoughby, Tate Rowney, Ishin Shah, Chris Su",
    venue: "In Progress",
    description: "Market-based multi-agent mathematical discovery platform for collaborative human-AI research in formal mathematics at scale.",
    links: {
      website: "https://stagiralabs.com"
    },
    inProgress: true
  },
]

export const otherProjects: OtherProject[] = [
  {
    id: "cohesivegalois",
    title: "CohesiveGalois",
    description: "Proof and formalization that the Shape functor in Cohesive ∞-Topoi is not conservative in Lean",
    links: {
      github: "https://github.com/riyazahuja/cohesive_galois",
      paper: "/assets/cohesion_galois_writeup.pdf"
    }
  },
  // {
  //   id: "metaprover",
  //   title: "MetaProver",
  //   description: "Unified SDK for Neural Theorem Proving in Lean",
  //   links: {
  //     github: "#"
  //   }
  // },
  {
    id: "leanm2",
    title: "LeanM2",
    description: "Type bridge and tactics to connect Macaulay2 to Lean for computational algebraic geometry",
    links: {
      github: "https://github.com/riyazahuja/lean-m2",
      paper: "/assets/leanm2_writeup.pdf"
    }
  },
  {
    id: "whitney-graustein",
    title: "Whitney-Graustein Theorem",
    description: "Formalization of the Whitney-Graustein theorem in Lean",
    links: {
      github: "https://github.com/riyazahuja/Whitney-Graustein-Theorem"
    }
  },
  {
    id: "baire",
    title: "Baire Category Theorem",
    description: "Formalization of the Baire Category theorem and applications in Lean",
    links: {
      github: "https://github.com/riyazahuja/Baire-Category-Theorem"
    }
  },
  {
    id: "keraunos",
    title: "Keraunos",
    description: "Autonomous drone swarm navigation and targeting system",
    links: {
      github: "https://github.com/riyazahuja/Keraunos"
    }
  },
  {
    id: "orbisol",
    title: "Orbisol",
    description: "Orbital debris tracking and collision avoidance software",
    links: {
      github: "https://github.com/riyazahuja/Orbisol"
    }
  }
]

export const talks: Talk[] = [
  {
    id: "improver2-talk",
    venue: "L3",
    title: "ImProver2",
    links: {
      slides: "/assets/improver2_slides.pptx"
    }
  },
  {
    id: "kj-talk",
    venue: "Categorical Logic group",
    title: "Kripke-Joyal Semantics",
    links: {
      slides: "/assets/kripke_joyal_slides.pdf",
      paper: "/assets/kripke_joyal_writeup.pdf"
    }
  },
  {
    id: "leanm2-talk",
    venue: "Algebraic Geometry group",
    title: "LeanM2",
    links: {
      slides: "/assets/leanm2_slides.pdf",
      paper: "/assets/leanm2_writeup.pdf"
    }
  },
  {
    id: "theoremprover-talk",
    venue: "L3",
    title: "How to build a (useful) theorem prover",
    links: {
      slides: "/assets/how_to_make_prover_slides.pptx"
    }
  },
  {
    id: "improver-talk",
    venue: "L3",
    title: "ImProver",
    links: {
      slides: "/assets/improver_slides.pptx"
    }
  },
  {
    id: "sard-talk",
    venue: "Differential topology group",
    title: "Sard's theorem",
    links: {
      paper: "/assets/sard_writeup.pdf",
    }
  }
]

export const pastWork: PastWork[] = [
  {
    id: "expii",
    organization: "Expii",
    description: "Edtech platform for gamifying interactive math learning",
    link: "https://www.expii.com/"
  },
  {
    id: "purple-hand",
    organization: "The Purple Hand",
    description: "501(c)(3) nonprofit for using data to fight human trafficking",
    // link: "#"
  }
]

// Helper functions for data access
export const getPublicationById = (id: string): Publication | null => {
  return publications.find((pub) => pub.id === id) || null
}

export const getNewsItemById = (id: string): NewsItem | null => {
  return newsItems.find((item) => item.id === id) || null
}

export const getPublishedPublications = (): Publication[] => {
  return publications.filter((pub) => !pub.inProgress)
}

export const getInProgressPublications = (): Publication[] => {
  return publications.filter((pub) => pub.inProgress)
}
