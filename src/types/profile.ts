export interface Profile {
  name: string
  githubUsername: string
  tagline: string
  taglineLine2?: string
  location: string
  avatarUrl: string
}

export interface Social {
  github: string
  linkedin: string
  email: string
  phone?: string
}
