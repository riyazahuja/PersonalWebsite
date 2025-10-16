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
  link: string
}

export interface Talk {
  id: string
  venue: string
  title: string
  date?: string
  link?: string
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
    description: "ImProver accepted to ICLR 2025 in Singapore",
    link: "#"
  },
  {
    id: "news-2",
    date: "2025-01-15",
    description: "Gave talk on ImProver at L3 seminar",
    link: "#"
  },
  {
    id: "news-3",
    date: "2024-12-10",
    description: "Released MetaProver open-source library",
    link: "#"
  }
]

export const publications: Publication[] = [
  {
    id: "improver",
    title: "ImProver: Agent-Based Automated Proof Optimization for Lean 4",
    authors: "Riyaz Ahuja, Jeremy Avigad, Prasad Tetali, Sean Welleck",
    venue: "ICLR 2025",
    description: "Proof-optimization framework for Lean 4 providing context extraction, auto-premise retrieval and RL/SFT pipelines to shorten or synthesise proofs.",
    links: {
      paper: "#",
      github: "#"
    }
  },
  {
    id: "agora",
    title: "Agora: Market-Based Multi-Agent Theorem Proving",
    authors: "Riyaz Ahuja",
    venue: "In Progress",
    description: "Market-based multi-agent layer where investors price theorem shares and freelancer agents earn by increasing library value, turning proof search into a competitive economy.",
    links: {
      website: "#"
    },
    inProgress: true
  },
  {
    id: "metaprover",
    title: "MetaProver: Unified SDK for Automated Theorem Proving",
    authors: "Riyaz Ahuja",
    venue: "In Progress",
    description: "Unified SDK that lets small open-weight models beat GPT-4o on Lean by combining proof optimisation, generation, auto-/informal-isation, tree-search and RLHF/DPO in a single library.",
    links: {
      github: "#"
    },
    inProgress: true
  },
  {
    id: "compass",
    title: "Compass: Autonomous Mathematical Discovery",
    authors: "Riyaz Ahuja",
    venue: "In Progress",
    description: "Conjecturer-prover system trained on a live Lean knowledge-graph; GRPO loop rewards difficulty, novelty and relatedness to autonomously explore new mathematical territory.",
    links: {
      github: "#"
    },
    inProgress: true
  },
  {
    id: "improver2",
    title: "ImProver²: Next Generation Proof Optimization",
    authors: "Riyaz Ahuja",
    venue: "In Progress",
    description: "Second iteration of ImProver with enhanced capabilities and improved performance on complex mathematical proofs.",
    links: {
      github: "#"
    },
    inProgress: true
  }
]

export const otherProjects: OtherProject[] = [
  {
    id: "leanm2",
    title: "LeanM2",
    description: "Formalization of modern algebraic geometry concepts in Lean 4",
    link: "#"
  },
  {
    id: "prooftree",
    title: "ProofTree",
    description: "Visualization tool for Lean proof trees and tactics",
    link: "#"
  },
  {
    id: "whitney-graustein",
    title: "Whitney-Graustein Theorem",
    description: "Complete formalization of the Whitney-Graustein theorem in Lean",
    link: "#"
  },
  {
    id: "baire",
    title: "Baire Category Theorem",
    description: "Formalization of the Baire Category theorem and applications",
    link: "#"
  },
  {
    id: "kernanous",
    title: "Kernanous",
    description: "Educational platform for interactive mathematics learning",
    link: "#"
  },
  {
    id: "orbisol",
    title: "Orbisol",
    description: "Orbital mechanics simulation and visualization tool",
    link: "#"
  }
]

export const talks: Talk[] = [
  {
    id: "talk-1",
    venue: "L3",
    title: "ImProver",
    link: "#"
  },
  {
    id: "talk-2",
    venue: "L3",
    title: "How to build a (useful) theorem prover",
    link: "#"
  },
  {
    id: "talk-3",
    venue: "Categorical Logic group",
    title: "Kripke-Joyal Semantics",
    link: "#"
  },
  {
    id: "talk-4",
    venue: "Algebraic Geometry group",
    title: "LeanM2",
    link: "#"
  },
  {
    id: "talk-5",
    venue: "Differential topology group",
    title: "Sard's theorem",
    link: "#"
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
