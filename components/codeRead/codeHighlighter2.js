// CodeHighlighter2.js

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { sunburst } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CodeHighlighter2 = ({ code, language }) => (
  <SyntaxHighlighter PreTag='div' language={language} style={sunburst} wrapLongLines>
    {String(code).replace(/\n$/, '')}
  </SyntaxHighlighter>
)

export default CodeHighlighter2
