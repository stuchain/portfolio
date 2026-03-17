// Edit for CV / Resume section; same data can drive PDF export later.

export interface CVEntry {
  period: string
  title: string
  org: string
  description?: string
}

export interface CVData {
  education: CVEntry[]
  experience: CVEntry[]
  skills: string[]
  interests: string[]
}

export const cv: CVData = {
  education: [
    {
      period: '10/2025 – Present',
      title: 'Master of Applied Informatics (2 years remote; 90 ECTs)',
      org: 'University of Macedonia, Thessaloniki, Greece',
      description: 'Currently attending IoT and Cryptography courses.',
    },
    {
      period: '10/2020 – 02/2025',
      title: 'Bachelor of Computer Science (BSc, 240 ECTs)',
      org: 'Athens University of Economics and Business (AUEB), Athens, Greece',
      description: 'Algorithms, Network Economics, Technological Innovation and Entrepreneurship. Thesis: Analysis of the Ethereum Ecosystem & Applications of Tokenization.',
    },
    {
      period: '09/2017 – 06/2020',
      title: 'General Lyceum',
      org: 'Pythagoreio General Lyceum, Samos, Greece',
      description: 'Grade: 19.8/20.',
    },
  ],
  experience: [
    {
      period: '02/2025 – Present',
      title: 'Full-Stack Developer',
      org: 'Netcompany, Athens, Greece',
      description:
        'Contributing to a next-generation Danish banking platform (NIL) for SDC: full-stack features (authentication, multitenancy, external integrations). Designed and implemented a scalable multitenant UI framework. Delivered system analysis and integration design documents for business-critical components.',
    },
    {
      period: '01/2020 – Present',
      title: 'Co-Owner',
      org: "Heaven's Door Apartments, Samos, Greece",
      description:
        'Operations, marketing, and digital infrastructure for boutique hospitality. Built custom booking workflow, SEO-focused website, and automated booking via Telegram bots; expanded guest services (car rentals, restaurant reservations).',
    },
    {
      period: '2021–2024 / 02/2023–09/2023',
      title: 'IT & Concierge / Digital Operations (seasonal)',
      org: 'Cayos Agency, Mykonos; Athena Greek Gastronomy & She Boutique Hotel',
      description:
        'Cayos: IT systems and booking workflows for luxury concierge; managed client requests and digital presence. Athena: POS and online reservation systems; streamlined booking and social media.',
    },
  ],
  skills: ['Java', 'Python', 'Anchor', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Solidity', 'Ed25519', 'AEAD'],
  interests: ['Web3 & Cryptography', 'Tech communities', 'Travelling', 'Trail running', 'Basketball', 'DJing'],
}
