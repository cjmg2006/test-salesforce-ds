import { useState } from 'react'
import SearchForm from './components/SearchForm'
import ResultsCard from './components/ResultsCard'
import { lookup } from './data/assessments'
import './App.css'

export default function App() {
  const [result, setResult] = useState(null)

  function handleSearch(className, indexNumber) {
    setResult(lookup(className, indexNumber))
  }

  function handleReset() {
    setResult(null)
  }

  return (
    <div className="page">
      <header className="page-header">
        <div className="header-inner">
          <div className="header-icon">📋</div>
          <div>
            <h1 className="header-title">Weighted Assessment Lookup</h1>
            <p className="header-subtitle">Enter your child's class and index number to view assessment dates.</p>
          </div>
        </div>
      </header>

      <main className="page-main">
        <div className="card">
          {result === null ? (
            <>
              <h2 className="card-heading">Find Assessment Dates</h2>
              <SearchForm onSearch={handleSearch} />
            </>
          ) : (
            <ResultsCard result={result} onReset={handleReset} />
          )}
        </div>
      </main>

      <footer className="page-footer">
        <p>Dates are subject to change — please refer to official school notices.</p>
      </footer>
    </div>
  )
}
