import { cv, type CVEntry } from '../data/generated'
import PixelPanel from './ui/PixelPanel'
import Skills from './Skills'
import { useInView } from '../hooks/useInView'

function CVEntryCard({ entry }: { entry: CVEntry }) {
  return (
    <article className="cv-entry">
      <PixelPanel>
        <p className="cv-entry-period">{entry.period}</p>
        <h4 className="cv-entry-title">{entry.title}</h4>
        <p className="cv-entry-org">{entry.org}</p>
        {entry.description && <p className="cv-entry-desc">{entry.description}</p>}
      </PixelPanel>
    </article>
  )
}

export default function CV() {
  const { ref, isInView } = useInView()

  return (
    <section id="resume">
      <div ref={ref} className={`fade-in-up${isInView ? ' is-visible' : ''}`}>
        <h2>Resume</h2>

        <h3>Education</h3>
        {cv.education.map((entry, i) => (
          <CVEntryCard key={i} entry={entry} />
        ))}

        <h3>Experience</h3>
        {cv.experience.map((entry, i) => (
          <CVEntryCard key={i} entry={entry} />
        ))}

        <Skills />
      </div>
    </section>
  )
}
