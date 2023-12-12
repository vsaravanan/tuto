import ReadCode from '@/components/codeRead/readCode'
import { odd_occurrences } from '@/components/codility/odd_occurrences'
import 'styles/sourcecode.css'

const OddOccurrences = () => {
  const filePath =
    'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/odd_occurrences.js'

  return (
    <div>
      <ul>
        <li>
          <h1>
            odd_occurrences([9, 3, 9, 3, 9, 7, 9])
            <br></br>
            {odd_occurrences([9, 3, 9, 3, 9, 7, 9]).toString()}
          </h1>
          <br></br>
          <br></br>
        </li>

        <li>
          please check console.log as well
          <br></br>
          <br></br>
        </li>

        <li>
          <ReadCode filePath={filePath} />
        </li>
      </ul>
    </div>
  )
}

export default OddOccurrences
