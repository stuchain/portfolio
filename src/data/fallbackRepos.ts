// Used when GitHub API is unavailable; keep in sync with real repos if needed.

export interface RepoMinimal {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  topics?: string[]
}

const baseUrl = 'https://github.com/stuchain'

export const fallbackRepos: RepoMinimal[] = [
  {
    name: 'CuePoint',
    description: 'Cue point and media tooling.',
    language: 'TypeScript',
    stargazers_count: 0,
    updated_at: '2024-01-15T10:00:00Z',
    html_url: `${baseUrl}/CuePoint`,
    topics: ['media', 'tools'],
  },
  {
    name: 'ctf-maze-arena',
    description: 'CTF maze challenge and arena.',
    language: 'Python',
    stargazers_count: 0,
    updated_at: '2024-02-01T12:00:00Z',
    html_url: `${baseUrl}/ctf-maze-arena`,
    topics: ['ctf', 'security'],
  },
  {
    name: 'mini-secure-channel-solana',
    description: 'Mini secure channel implementation on Solana.',
    language: 'Rust',
    stargazers_count: 0,
    updated_at: '2024-01-20T08:00:00Z',
    html_url: `${baseUrl}/mini-secure-channel-solana`,
    topics: ['solana', 'blockchain'],
  },
  {
    name: 'iot-oracle-gateway',
    description: 'IoT oracle gateway for on-chain data.',
    language: 'TypeScript',
    stargazers_count: 0,
    updated_at: '2024-02-10T14:00:00Z',
    html_url: `${baseUrl}/iot-oracle-gateway`,
    topics: ['iot', 'oracle'],
  },
  {
    name: 'AUEB',
    description: 'University-related projects and coursework.',
    language: 'Java',
    stargazers_count: 0,
    updated_at: '2023-12-01T09:00:00Z',
    html_url: `${baseUrl}/AUEB`,
    topics: ['education'],
  },
]
