import { skills } from '../data/generated'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills">
      <div ref={ref} className={`fade-in-up${isInView ? ' is-visible' : ''}`}>
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
      </div>
    </section>
  )
}
