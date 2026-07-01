'use Server'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import CodeHighlighter2 from './codeRead/codeHighlighter2'

const CodeComponent = ({ className, children, ...props }) => {
  const match = /language-([\w-]+)/.exec(className || '')
  const language = match?.[1] || 'java'
  const isBlock = Boolean(match)

  if (isBlock) {
    return <CodeHighlighter2 code={children} language={language} />
  }

  return (
    <code className='inline-code' {...props}>
      {children}
    </code>
  )
}

const MarkdownPreview2 = ({ filePath }) => {
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const filePath = '/sample.md'

  useEffect(() => {
    if (!filePath?.endsWith('.md')) {
      setMarkdown('')
      return
    }

    const loadMd = async () => {
      try {
        const response = await fetch(filePath)
        let text = await response.text()
        // const converted = marked(text)
        setMarkdown(text)
        setLoading(false)
      } catch (error) {
        console.error('Error loading markdown:', error)
        setError('Error loading markdown')
        setLoading(false)
      }
    }

    loadMd()
  }, [filePath])

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading markdown content...</div>
  }

  return (
    <>
      <button onClick={() => setMarkdown('ssss')}>Update Markdown</button>

      <ReactMarkdown
        // remarkPlugins={[remarkGfm]}
        // rehypePlugins={[rehypeRaw]}
        components={{ code: CodeComponent }} //  without useMemo, it will re-render the code block every time the parent component re-renders, which can be inefficient and cause performance issues.
      >
        {markdown}
      </ReactMarkdown>
    </>
  )
}

export default MarkdownPreview2
