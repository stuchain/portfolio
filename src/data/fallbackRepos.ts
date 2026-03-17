// Types for repo data. Fallback list comes from profile.md via generated.ts.

export interface RepoMinimal {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  topics?: string[]
}
