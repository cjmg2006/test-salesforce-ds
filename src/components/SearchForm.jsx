import { useState } from 'react'
import { CLASSES } from '../data/assessments'

export default function SearchForm({ onSearch }) {
  const [className, setClassName] = useState('')
  const [indexNumber, setIndexNumber] = useState('')
  const [touched, setTouched] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!className || !indexNumber) return
    onSearch(className, indexNumber)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="field-group">
        <label htmlFor="class-select" className="field-label">
          Class
        </label>
        <select
          id="class-select"
          className={`field-input${touched && !className ? ' field-input--error' : ''}`}
          value={className}
          onChange={e => setClassName(e.target.value)}
        >
          <option value="">Select a class…</option>
          {CLASSES.map(c => (
            <option key={c} value={c}>Primary {c}</option>
          ))}
        </select>
        {touched && !className && (
          <span className="field-error">Please select a class.</span>
        )}
      </div>

      <div className="field-group">
        <label htmlFor="index-input" className="field-label">
          Index Number
        </label>
        <input
          id="index-input"
          type="number"
          min="1"
          max="40"
          placeholder="e.g. 12"
          className={`field-input${touched && !indexNumber ? ' field-input--error' : ''}`}
          value={indexNumber}
          onChange={e => setIndexNumber(e.target.value)}
        />
        {touched && !indexNumber && (
          <span className="field-error">Please enter an index number.</span>
        )}
      </div>

      <button type="submit" className="btn-search">
        Search
      </button>
    </form>
  )
}
