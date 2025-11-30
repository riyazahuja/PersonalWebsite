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
    date: "2025-03-01",
    description: "Named as an ACS Scholar",
    link: "#"
  },
  {
    id: "news-2",
    date: "2025-01-15",
    description: "Released Agora v0.1 to the public",
    link: "#"
  },
  {
    id: "news-3",
    date: "2025-01-15",
    description: "Released and gave a talk on LeanM2 at CMU",
    link: "#"
  },
  {
    id: "news-4",
    date: "2024-12-10",
    description: "Won the Richard A. Moore Award in Mathematical Sciences",
    link: "#"
  },
  {
    id: "news-5",
    date: "2024-12-10",
    description: "Presented ImProver at ICLR 2025 in Singapore",
    link: "#"
  },
  {
    id: "news-6",
    date: "2024-12-10",
    description: "Invited to the Simons Institute and SLMath joint workshop on AI for Mathematics",
    link: "#"
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
      paper: "#",
      github: "#"
    }
  },
  {
    id: "improver2",
    title: "ImProver²: Iteratively Self-Improving SLM's for Neurosymbolic Proof Optimization",
    authors: "Riyaz Ahuja, Tate Rowney, Jeremy Avigad, Prasad Tetali, Sean Welleck",
    venue: "In Progress",
    description: "Generalized RL Pipeline for training proof optimizers for the optimization of research-level Lean theorems at scale, across metrics, and at low cost.",
    links: {
      github: "#"
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
      github: "#"
    },
    inProgress: true
  },
  {
    id: "agora",
    title: "Agora: Market-Based Multi-Agent Automated Mathematical Discovery",
    authors: "Riyaz Ahuja, Alexander Heckett, Shivansh Gour, Alexander Willoughby, Tate Rowney, Ishin Shah, Christian Su",
    venue: "In Progress",
    description: "Market-based multi-agent mathematical discovery platform for collaborative human-AI research in formal mathematics at scale.",
    links: {
      website: "#"
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
      github: "#"
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
      github: "#"
    }
  },
  {
    id: "whitney-graustein",
    title: "Whitney-Graustein Theorem",
    description: "Formalization of the Whitney-Graustein theorem in Lean",
    links: {
      github: "#"
    }
  },
  {
    id: "baire",
    title: "Baire Category Theorem",
    description: "Formalization of the Baire Category theorem and applications in Lean",
    links: {
      github: "#"
    }
  },
  {
    id: "kernanous",
    title: "Kernanous",
    description: "Autonomous drone swarm navigation and targeting system",
    links: {
      github: "#"
    }
  },
  {
    id: "orbisol",
    title: "Orbisol",
    description: "Orbital debris tracking and collision avoidance software",
    links: {
      github: "#"
    }
  }
]

export const talks: Talk[] = [
  {
    id: "improver2-talk",
    venue: "L3",
    title: "ImProver2",
    links: {
      slides: "#"
    }
  },
  {
    id: "kj-talk",
    venue: "Categorical Logic group",
    title: "Kripke-Joyal Semantics",
    links: {
      slides: "#"
    }
  },
  {
    id: "leanm2-talk",
    venue: "Algebraic Geometry group",
    title: "LeanM2",
    links: {
      slides: "#"
    }
  },
  {
    id: "theoremprover-talk",
    venue: "L3",
    title: "How to build a (useful) theorem prover",
    links: {
      slides: "#"
    }
  },
  {
    id: "improver-talk",
    venue: "L3",
    title: "ImProver",
    links: {
      slides: "#"
    }
  },
  {
    id: "sard-talk",
    venue: "Differential topology group",
    title: "Sard's theorem",
    links: {
      slides: "#"
    }
  }
]

export const pastWork: PastWork[] = [
  {
    id: "expii",
    organization: "Expii",
    description: "Educational technology platform for interactive math and science learning",
    link: "#"
  },
  {
    id: "purple-hand",
    organization: "The Purple Hand",
    description: "Student-led organization focused on accessibility and inclusion",
    link: "#"
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
