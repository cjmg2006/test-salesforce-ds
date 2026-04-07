import { SUBJECT_LABELS, SUBJECT_COLORS, formatDate } from '../data/assessments'

function SubjectCard({ subject, assessments }) {
  const { bg, border, accent } = SUBJECT_COLORS[subject]
  const label = SUBJECT_LABELS[subject]

  return (
    <div className="subject-card" style={{ background: bg, borderColor: border }}>
      <h3 className="subject-title" style={{ color: accent }}>
        {label}
      </h3>
      <ul className="wa-list">
        {assessments.map(wa => (
          <li key={wa.name} className="wa-item">
            <span className="wa-name" style={{ background: border, color: '#fff' }}>
              {wa.name}
            </span>
            <span className="wa-date">{formatDate(wa.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ResultsCard({ result, onReset }) {
  if (result.error) {
    return (
      <div className="result-error">
        <p>{result.error}</p>
        <button className="btn-back" onClick={onReset}>Try Again</button>
      </div>
    )
  }

  const { className, indexNumber, assessments } = result

  return (
    <div className="results-wrapper">
      <div className="results-header">
        <div className="results-identity">
          <span className="results-label">Class</span>
          <strong>Primary {className}</strong>
          <span className="results-divider" />
          <span className="results-label">Index</span>
          <strong>{String(indexNumber).padStart(2, '0')}</strong>
        </div>
        <button className="btn-back" onClick={onReset}>← New Search</button>
      </div>

      <div className="subject-grid">
        {Object.entries(assessments).map(([subject, was]) => (
          <SubjectCard key={subject} subject={subject} assessments={was} />
        ))}
      </div>
    </div>
  )
}
