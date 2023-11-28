// CodeHighlighter.js
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { sunburst } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
// import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
// import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeHighlighter = ({ code }) => (
  <SyntaxHighlighter language='javascript' style={sunburst}>
    {code}
  </SyntaxHighlighter>
)

export default CodeHighlighter
