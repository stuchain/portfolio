import { cv, type CVEntry } from '../data/cv'
import PixelPanel from './ui/PixelPanel'
import Skills from './Skills'

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
  return (
    <section id="resume">
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

      <h3>Interests</h3>
      <PixelPanel>
        <ul className="cv-list">
          {cv.interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </PixelPanel>

      {/* Replace href with path to CV PDF in public/ (e.g. /cv.pdf). */}
      <p>
        <a href="#" aria-label="Download Resume" className="pixel-btn pixel-btn--primary">
          Download Resume
        </a>
      </p>
    </section>
  )
}
