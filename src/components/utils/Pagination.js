import React from 'react'
import ThemeButton from './ThemeButton'

export default function Pagination({ page, limit, total, items = 'items', onPageChange }) {
  const pagesTotal = Math.ceil(total / limit)
  const pagesArray = [...Array(pagesTotal).keys()]

  const handlePageChange = page => {
    onPageChange(Number.parseInt(page))
  }

  return (
    <div className="Pagination">
      <ThemeButton
        className="mr-2"
        disabled={page < 2}
        onClick={() => handlePageChange(page - 1)}
      >
        &#10094;
      </ThemeButton>
      <select value={page} onChange={evt => handlePageChange(evt.target.value)}>
        {pagesArray.map(i =>
          <option key={i} value={i + 1}>{i + 1}</option>
        )}
      </select> / {pagesTotal}
      <ThemeButton
        theme="primary"
        className="ml-2"
        disabled={page >= pagesTotal}
        onClick={() => handlePageChange(page + 1)}
      >
        <span className="mr-1">Next</span> &#10095;
      </ThemeButton>
    </div>
  )
}
