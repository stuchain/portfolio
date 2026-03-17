import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((cat, i) => (
        <div key={i} className="skills-category">
          <h3>{cat.category}</h3>
          <div className="skill-badges" role="list">
            {cat.items.map((item, j) => (
              <span
                key={j}
                className="skill-badge"
                role="listitem"
                tabIndex={0}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
