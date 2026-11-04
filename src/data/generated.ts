// Generated from profile.md – do not edit by hand.
/* eslint-disable */
import type { Profile, Social } from '../types/profile'
import type { CVData } from './cv'
import type { RepoMinimal } from './fallbackRepos'
import type { SkillCategory } from './skills'

export const profile: Profile = {
  "name": "Stelios Vasileiou",
  "githubUsername": "stuchain",
  "tagline": "Software Developer.",
  "taglineLine2": "",
  "location": "Athens, Greece",
  "avatarUrl": ""
}

export const social: Social = {
  "github": "https://github.com/stuchain",
  "linkedin": "https://www.linkedin.com/in/stelios-vasileiou/",
  "email": "mailto:stelios.vasiliou@icloud.com",
  "phone": "+306982880304"
}

export const bio: string[] = [
  "I'm Stelios, a Full-Stack Developer based in Athens, Greece, currently working at LoopCV. Before that I spent almost two years at Netcompany on a next-generation Danish banking platform, working on UI architecture, multitenancy and enterprise integrations.",
  "My main project is [CuePoint](https://usecuepoint.com/), a free, open-source desktop app for DJs that cleans up Rekordbox libraries with official Beatport metadata. It fixes missing or wrong keys, BPM, genres and labels, finds duplicates and helps you discover new music. I also built muzpa-auto-search, a desktop tool that turns playlist exports into a fast search-and-download workflow.",
  "Beyond music tools, my work spans blockchain, cryptography and systems: a bachelor thesis on Ethereum tokenization, a Solana-based secure channel for decentralized key verification, an IoT oracle gateway that anchors signed telemetry on-chain, and ctf-maze-arena, a Rust and TypeScript arena for maze generation and solver visualization.",
  "Outside of coding, I love travelling, producing house music, and DJing, interests that strongly influence my creativity and the projects I'm building."
]

export const cv: CVData = {
  "education": [
    {
      "period": "10/2025 – Present",
      "title": "Master of Applied Informatics (2 years remote; 90 ECTs)",
      "org": "University of Macedonia (UoM), Thessaloniki, Greece",
      "description": "Currently attending Blockchain, Cryptography and IoT courses."
    },
    {
      "period": "10/2020 – 02/2025",
      "title": "Bachelor of Computer Science (BSc, 240 ECTs)",
      "org": "Athens University of Economics and Business (AUEB), Athens, Greece",
      "thesisUrl": "https://github.com/stuchain/AUEB/tree/main/Thesis",
      "thesisLabel": "Thesis: Analysis of the Ethereum Ecosystem & Applications of Tokenization"
    }
  ],
  "experience": [
    {
      "period": "11/2026 – Present",
      "title": "Full-Stack Developer",
      "org": "LoopCV, Athens, Greece",
      "description": "Full-stack development on LoopCV, a platform that automates the job search."
    },
    {
      "period": "02/2025 – 10/2026",
      "title": "Full-Stack Developer",
      "org": "Netcompany, Athens, Greece",
      "description": "Contributed to a next-generation Danish banking platform (NIL) for SDC: full-stack features (authentication, multitenancy, external integrations). Designed and implemented a scalable multitenant UI framework. Delivered system analysis and integration design documents for business-critical components."
    }
  ],
  "secondaryExperience": [
    {
      "period": "01/2020 – Present",
      "title": "Co-Owner",
      "org": "Heaven's Door Apartments, Samos, Greece",
      "description": "Operations, marketing, and digital infrastructure for boutique hospitality. Built custom booking workflow, SEO-focused website, and automated booking via Telegram bots; expanded guest services (car rentals, restaurant reservations)."
    },
    {
      "period": "2021–2024 / 02/2023–09/2023",
      "title": "Seasonal: IT & Concierge / Digital Operations",
      "org": "Cayos Agency, Mykonos; Athena Greek Gastronomy & She Boutique Hotel",
      "description": "Cayos: IT systems and booking workflows for luxury concierge; managed client requests and digital presence. Athena: POS and online reservation systems; streamlined booking and social media."
    }
  ],
  "skills": [],
  "interests": []
}

export const skills: SkillCategory[] = [
  {
    "category": "Technical",
    "items": [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Rust",
      "C++",
      "SQL",
      "Solidity",
      "React",
      "Next.js",
      "Node.js",
      "Docker"
    ]
  },
  {
    "category": "Soft skills",
    "items": [
      "Communication",
      "Ownership",
      "Problem-solving",
      "Team collaboration",
      "Critical thinking",
      "Attention to detail"
    ]
  },
  {
    "category": "Languages",
    "items": [
      "Greek (Native)",
      "English (C2)",
      "French (B2)"
    ]
  }
]

export const featuredRepos: string[] = [
  "CuePoint",
  "muzpa-auto-search",
  "ctf-maze-arena",
  "mini-secure-channel-solana",
  "iot-oracle-gateway",
  "AUEB"
]

export const featuredCount: number = 6

export const excludedRepos: string[] = [
  "stuchain",
  "readme"
]

export const projectWebsites: Record<string, string> = {
  "CuePoint": "https://usecuepoint.com/"
}

export const fallbackRepos: RepoMinimal[] = [
  {
    "name": "CuePoint",
    "description": "Free open source desktop app for DJs: clean up your Rekordbox library with Beatport. Fix missing or wrong keys, BPM, genres and labels, find duplicates and discover new music.",
    "language": "Python",
    "stargazers_count": 11,
    "updated_at": "2026-11-03T08:44:26Z",
    "html_url": "https://github.com/stuchain/CuePoint",
    "topics": [
      "music",
      "metadata",
      "dj",
      "rekordbox",
      "beatport"
    ],
    "homepage": null
  },
  {
    "name": "muzpa-auto-search",
    "description": "Desktop app that opens Muzpa search links from playlist CSVs (Spotify exports, etc.) with a fast manual Run -> Download -> Next workflow.",
    "language": "TypeScript",
    "stargazers_count": 0,
    "updated_at": "2026-04-15T00:00:00Z",
    "html_url": "https://github.com/stuchain/muzpa-auto-search",
    "topics": [
      "music",
      "desktop",
      "automation"
    ],
    "homepage": null
  },
  {
    "name": "ctf-maze-arena",
    "description": "A web arena for maze generation, algorithm visualization, and solver comparison. Built with Rust + TypeScript.",
    "language": "Rust",
    "stargazers_count": 0,
    "updated_at": "2026-09-15T00:00:00Z",
    "html_url": "https://github.com/stuchain/ctf-maze-arena",
    "topics": [
      "rust",
      "algorithms",
      "visualization"
    ],
    "homepage": null
  },
  {
    "name": "mini-secure-channel-solana",
    "description": "A six-phase secure channel project demonstrating X25519 key exchange, MITM attacks, Ed25519 authentication, ChaCha20-Poly1305 AEAD, and Solana-based decentralized key verification.",
    "language": "Python",
    "stargazers_count": 0,
    "updated_at": "2026-04-01T00:00:00Z",
    "html_url": "https://github.com/stuchain/mini-secure-channel-solana",
    "topics": [
      "solana",
      "cryptography",
      "secure-channel"
    ],
    "homepage": null
  },
  {
    "name": "iot-oracle-gateway",
    "description": "End-to-end IoT oracle: Python simulator publishes over MQTT; oracle aggregates, detects anomalies (EWMA/z-score), anchors hashes on-chain (Solidity/Hardhat); Streamlit dashboard.",
    "language": "Python",
    "stargazers_count": 0,
    "updated_at": "2026-04-01T00:00:00Z",
    "html_url": "https://github.com/stuchain/iot-oracle-gateway",
    "topics": [
      "iot",
      "oracle",
      "mqtt",
      "solidity"
    ],
    "homepage": null
  },
  {
    "name": "AUEB",
    "description": "A collection of AUEB coursework projects, covering blockchain thesis, distributed systems, web development and Python.",
    "language": "Java",
    "stargazers_count": 0,
    "updated_at": "2026-04-01T00:00:00Z",
    "html_url": "https://github.com/stuchain/AUEB",
    "topics": [
      "education",
      "ethereum",
      "thesis"
    ],
    "homepage": null
  }
]

export type { CVEntry, CVData } from './cv'
export type { RepoMinimal } from './fallbackRepos'
export type { SkillCategory } from './skills'
