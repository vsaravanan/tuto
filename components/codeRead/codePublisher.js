// CodePublisher.js
import React from 'react'
import ReadCode from './readCode'

const CodePublisher = ({ filePath }) => {
  return (
    <div>
      <ReadCode filePath={filePath} />
    </div>
  )
}

export default CodePublisher
