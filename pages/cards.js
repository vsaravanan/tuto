'use client'
import { Card } from '@/components/Card'

import 'styles/cards.css'
import carddata from '@/db/carddata'
import { pdfCards, transformPdfData } from '@/db/pdfCards'
import { use, Suspense } from 'react'

const pdfsPromise = pdfCards()

const CardsTmp = () => {
  const { pdfs } = use(pdfsPromise)
  const pdfData = transformPdfData(pdfs)

  const pdfCardData = [...carddata, ...pdfData]

  return (
    <>
      <div className='container'>
        {pdfCardData?.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </>
  )
}

const LoadingSkeleton = () => <div>Loading....</div>

const Cards = () => {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <CardsTmp />
    </Suspense>
  )
}

export default Cards
