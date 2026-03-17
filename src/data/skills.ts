// Edit for Skills section.

export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Technical', items: ['Java', 'Python', 'Anchor', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Solidity'] },
  { category: 'Web / Full-stack', items: ['React', 'Node.js', 'TypeScript'] },
  { category: 'Blockchain / Crypto', items: ['Solana', 'Ethereum', 'Smart contracts', 'Web3', 'Secure channels', 'Ed25519', 'AEAD'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'VS Code'] },
  { category: 'Soft skills', items: ['Communication', 'Ownership', 'Problem-solving', 'Team collaboration', 'Critical thinking', 'Attention to detail'] },
  { category: 'Languages', items: ['Greek (Native)', 'English (C2)', 'French (B2)'] },
]
