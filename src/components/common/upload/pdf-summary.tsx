// components/pdf-summary.tsx
'use client'

import React from 'react'

interface PdfSummaryProps {
  summary: string
}

const PdfSummary: React.FC<PdfSummaryProps> = ({ summary }) => {
  if (!summary) return null

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📄 PDF Summary</h2>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
        {summary}
      </p>
    </div>
  )
}

export default PdfSummary
