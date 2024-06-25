// ReadCode.js
import React, { useEffect } from 'react'
import useCodeStore from '@/redux/codeSlice'
import CodeHighlighter from './codeHighlighter'

const ReadCode = ({ filePath }) => {
  const { code, setCode } = useCodeStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(filePath)
        const response = await fetch(filePath)
        const data = await response.text()
        setCode(data)
      } catch (error) {
        console.error('Error fetching content:', error)
      }
    }

    fetchData()
  }, [filePath, setCode])

  return <CodeHighlighter code={code} />
}

export default ReadCode
