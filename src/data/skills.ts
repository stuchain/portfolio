// Edit for Skills section.

export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Solidity', 'Rust'] },
  { category: 'Web', items: ['React', 'Vite', 'Node.js', 'HTML/CSS'] },
  { category: 'Blockchain / Crypto', items: ['Ethereum', 'Solana', 'Smart contracts', 'Web3.js'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'VS Code'] },
  { category: 'Other', items: ['REST APIs', 'CI/CD', 'Testing'] },
]
