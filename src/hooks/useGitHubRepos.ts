import { useState, useEffect } from 'react'
import { profile, featuredRepos, featuredCount, fallbackRepos, type RepoMinimal } from '../data/generated'

const GITHUB_API_URL = `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100`

function sortRepos(repos: RepoMinimal[]): RepoMinimal[] {
  const featuredSet = new Set(featuredRepos)
  const featured: RepoMinimal[] = []
  const rest: RepoMinimal[] = []

  for (const name of featuredRepos) {
    const repo = repos.find((r) => r.name === name)
    if (repo) featured.push(repo)
  }

  for (const repo of repos) {
    if (!featuredSet.has(repo.name)) rest.push(repo)
  }

  rest.sort((a, b) => {
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count
    }
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  })

  return [...featured, ...rest]
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<RepoMinimal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(GITHUB_API_URL)
      .then((res) => {
        if (!res.ok) {
          setRepos([...fallbackRepos])
          setError('Could not load live data; showing cached list.')
          return null
        }
        return res.json()
      })
      .then((data: RepoMinimal[] | null) => {
        if (data === null) return
        const list = Array.isArray(data) ? data : []
        setRepos(sortRepos(list))
      })
      .catch(() => {
        setRepos([...fallbackRepos])
        setError('Could not load live data; showing cached list.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { repos, loading, error, featuredCount }
}
