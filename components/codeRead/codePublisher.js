// CodePublisher.js
import React from 'react'
import ReadCode from './readCode'

const CodePublisher = () => {
  // const filePath = 'https://jsonplaceholder.typicode.com/users'
  // const filePath = 'http://localhost:10300/api/corsTest'
  // const filePath =
  const filePath =
    'https://raw.githubusercontent.com/vsaravanan/tuto/13b91839af866c11cc85d8474ab10d92100557a6/components/SideBar.js'

  return (
    <div>
      <ReadCode filePath={filePath} />
    </div>
  )
}

export default CodePublisher
