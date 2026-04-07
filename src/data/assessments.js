// Weighted Assessment schedule data
// Classes: Primary 3–6, streams A / B / C
// Each class has a roster size and per-subject WA dates

const SUBJECTS = ['english', 'math', 'science', 'motherTongue']

export const SUBJECT_LABELS = {
  english: 'English',
  math: 'Mathematics',
  science: 'Science',
  motherTongue: 'Mother Tongue',
}

export const SUBJECT_COLORS = {
  english:     { bg: '#EFF6FF', border: '#3B82F6', accent: '#1D4ED8' },
  math:        { bg: '#F0FDF4', border: '#22C55E', accent: '#15803D' },
  science:     { bg: '#FFF7ED', border: '#F97316', accent: '#C2410C' },
  motherTongue:{ bg: '#FDF4FF', border: '#A855F7', accent: '#7E22CE' },
}

// Assessment schedule: keyed by class → subject → list of WAs
const schedule = {
  // --- Primary 3 ---
  '3A': {
    english:      [{ name: 'WA 1', date: '2025-02-28' }, { name: 'WA 2', date: '2025-08-08' }],
    math:         [{ name: 'WA 1', date: '2025-03-07' }, { name: 'WA 2', date: '2025-08-15' }],
    science:      [{ name: 'WA 1', date: '2025-03-14' }, { name: 'WA 2', date: '2025-08-22' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-21' }, { name: 'WA 2', date: '2025-08-01' }],
  },
  '3B': {
    english:      [{ name: 'WA 1', date: '2025-03-01' }, { name: 'WA 2', date: '2025-08-09' }],
    math:         [{ name: 'WA 1', date: '2025-03-08' }, { name: 'WA 2', date: '2025-08-16' }],
    science:      [{ name: 'WA 1', date: '2025-03-15' }, { name: 'WA 2', date: '2025-08-23' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-22' }, { name: 'WA 2', date: '2025-08-02' }],
  },
  '3C': {
    english:      [{ name: 'WA 1', date: '2025-03-03' }, { name: 'WA 2', date: '2025-08-11' }],
    math:         [{ name: 'WA 1', date: '2025-03-10' }, { name: 'WA 2', date: '2025-08-18' }],
    science:      [{ name: 'WA 1', date: '2025-03-17' }, { name: 'WA 2', date: '2025-08-25' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-24' }, { name: 'WA 2', date: '2025-08-04' }],
  },
  // --- Primary 4 ---
  '4A': {
    english:      [{ name: 'WA 1', date: '2025-02-27' }, { name: 'WA 2', date: '2025-08-07' }],
    math:         [{ name: 'WA 1', date: '2025-03-06' }, { name: 'WA 2', date: '2025-08-14' }],
    science:      [{ name: 'WA 1', date: '2025-03-13' }, { name: 'WA 2', date: '2025-08-21' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-20' }, { name: 'WA 2', date: '2025-07-31' }],
  },
  '4B': {
    english:      [{ name: 'WA 1', date: '2025-03-04' }, { name: 'WA 2', date: '2025-08-12' }],
    math:         [{ name: 'WA 1', date: '2025-03-11' }, { name: 'WA 2', date: '2025-08-19' }],
    science:      [{ name: 'WA 1', date: '2025-03-18' }, { name: 'WA 2', date: '2025-08-26' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-25' }, { name: 'WA 2', date: '2025-08-05' }],
  },
  '4C': {
    english:      [{ name: 'WA 1', date: '2025-03-05' }, { name: 'WA 2', date: '2025-08-13' }],
    math:         [{ name: 'WA 1', date: '2025-03-12' }, { name: 'WA 2', date: '2025-08-20' }],
    science:      [{ name: 'WA 1', date: '2025-03-19' }, { name: 'WA 2', date: '2025-08-27' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-26' }, { name: 'WA 2', date: '2025-08-06' }],
  },
  // --- Primary 5 ---
  '5A': {
    english:      [{ name: 'WA 1', date: '2025-02-26' }, { name: 'WA 2', date: '2025-08-06' }, { name: 'WA 3', date: '2025-10-03' }],
    math:         [{ name: 'WA 1', date: '2025-03-05' }, { name: 'WA 2', date: '2025-08-13' }, { name: 'WA 3', date: '2025-10-10' }],
    science:      [{ name: 'WA 1', date: '2025-03-12' }, { name: 'WA 2', date: '2025-08-20' }, { name: 'WA 3', date: '2025-10-17' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-19' }, { name: 'WA 2', date: '2025-07-30' }, { name: 'WA 3', date: '2025-09-26' }],
  },
  '5B': {
    english:      [{ name: 'WA 1', date: '2025-02-27' }, { name: 'WA 2', date: '2025-08-07' }, { name: 'WA 3', date: '2025-10-04' }],
    math:         [{ name: 'WA 1', date: '2025-03-06' }, { name: 'WA 2', date: '2025-08-14' }, { name: 'WA 3', date: '2025-10-11' }],
    science:      [{ name: 'WA 1', date: '2025-03-13' }, { name: 'WA 2', date: '2025-08-21' }, { name: 'WA 3', date: '2025-10-18' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-20' }, { name: 'WA 2', date: '2025-07-31' }, { name: 'WA 3', date: '2025-09-27' }],
  },
  '5C': {
    english:      [{ name: 'WA 1', date: '2025-03-01' }, { name: 'WA 2', date: '2025-08-09' }, { name: 'WA 3', date: '2025-10-06' }],
    math:         [{ name: 'WA 1', date: '2025-03-08' }, { name: 'WA 2', date: '2025-08-16' }, { name: 'WA 3', date: '2025-10-13' }],
    science:      [{ name: 'WA 1', date: '2025-03-15' }, { name: 'WA 2', date: '2025-08-23' }, { name: 'WA 3', date: '2025-10-20' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-22' }, { name: 'WA 2', date: '2025-08-02' }, { name: 'WA 3', date: '2025-09-29' }],
  },
  // --- Primary 6 ---
  '6A': {
    english:      [{ name: 'WA 1', date: '2025-02-25' }, { name: 'WA 2', date: '2025-08-05' }, { name: 'WA 3', date: '2025-10-02' }],
    math:         [{ name: 'WA 1', date: '2025-03-04' }, { name: 'WA 2', date: '2025-08-12' }, { name: 'WA 3', date: '2025-10-09' }],
    science:      [{ name: 'WA 1', date: '2025-03-11' }, { name: 'WA 2', date: '2025-08-19' }, { name: 'WA 3', date: '2025-10-16' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-18' }, { name: 'WA 2', date: '2025-07-29' }, { name: 'WA 3', date: '2025-09-25' }],
  },
  '6B': {
    english:      [{ name: 'WA 1', date: '2025-02-26' }, { name: 'WA 2', date: '2025-08-06' }, { name: 'WA 3', date: '2025-10-03' }],
    math:         [{ name: 'WA 1', date: '2025-03-05' }, { name: 'WA 2', date: '2025-08-13' }, { name: 'WA 3', date: '2025-10-10' }],
    science:      [{ name: 'WA 1', date: '2025-03-12' }, { name: 'WA 2', date: '2025-08-20' }, { name: 'WA 3', date: '2025-10-17' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-19' }, { name: 'WA 2', date: '2025-07-30' }, { name: 'WA 3', date: '2025-09-26' }],
  },
  '6C': {
    english:      [{ name: 'WA 1', date: '2025-02-28' }, { name: 'WA 2', date: '2025-08-08' }, { name: 'WA 3', date: '2025-10-05' }],
    math:         [{ name: 'WA 1', date: '2025-03-07' }, { name: 'WA 2', date: '2025-08-15' }, { name: 'WA 3', date: '2025-10-12' }],
    science:      [{ name: 'WA 1', date: '2025-03-14' }, { name: 'WA 2', date: '2025-08-22' }, { name: 'WA 3', date: '2025-10-19' }],
    motherTongue: [{ name: 'WA 1', date: '2025-02-21' }, { name: 'WA 2', date: '2025-08-01' }, { name: 'WA 3', date: '2025-09-28' }],
  },
}

// Roster sizes per class
const rosterSizes = {
  '3A': 35, '3B': 34, '3C': 33,
  '4A': 36, '4B': 35, '4C': 34,
  '5A': 35, '5B': 36, '5C': 34,
  '6A': 34, '6B': 35, '6C': 36,
}

export const CLASSES = Object.keys(schedule).sort()

export function lookup(className, indexNumber) {
  const classData = schedule[className]
  if (!classData) return { error: 'Class not found.' }

  const size = rosterSizes[className] || 40
  const idx = parseInt(indexNumber, 10)
  if (isNaN(idx) || idx < 1 || idx > size) {
    return { error: `Index number must be between 1 and ${size} for class ${className}.` }
  }

  return {
    className,
    indexNumber: idx,
    assessments: SUBJECTS.reduce((acc, subject) => {
      acc[subject] = classData[subject]
      return acc
    }, {}),
  }
}

export function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-SG', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
