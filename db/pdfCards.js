'use server'

export const pdfCards = async () => {
  let urlPdf = process.env.NEXT_PUBLIC_serverjs
  urlPdf = urlPdf + 'pdfs'
  const res = await fetch(urlPdf)
  const data = await res.json()

  return data
}

export const transformPdfData = pdfData => {
  let listurl = process.env.NEXT_PUBLIC_listskills

  const grouped = {}
  pdfData.forEach(pdf => {
    const parts = pdf.split('/')
    if (parts.length < 2) return

    const folder = parts[0]
    const file = parts[1]

    if (!grouped[folder]) {
      grouped[folder] = []
    }

    const filename = file.replace(/\.pdf$/i, '')

    const title = filename
      .replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim()

    grouped[folder].push({
      [title]: `${listurl}${pdf}`,
    })
  })

  const cards = Object.entries(grouped).map(([folder, testpages]) => ({
    title: folder,
    testpages,
  }))

  return cards
}
