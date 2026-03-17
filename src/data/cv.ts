// Types for CV / Resume section. Data comes from profile.md via generated.ts.

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
