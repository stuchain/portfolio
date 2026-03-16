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
      period: '2018 – 2022',
      title: 'BSc in Computer Science',
      org: 'Athens University of Economics and Business (AUEB)',
      description: 'Focus on software engineering and distributed systems.',
    },
  ],
  experience: [
    {
      period: '2022 – present',
      title: 'Software Developer',
      org: 'Example Corp',
      description: 'Building web applications and internal tools.',
    },
    {
      period: '2021',
      title: 'Intern',
      org: 'Tech Lab',
      description: 'Contributed to open-source tooling and automation.',
    },
  ],
  skills: ['TypeScript', 'React', 'Node.js', 'Solidity', 'Cryptography'],
  interests: ['Blockchain', 'CTFs', 'Open source', 'System design'],
}
