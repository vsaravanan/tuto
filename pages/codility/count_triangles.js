import { count_triangles } from '@/components/codility/count_triangles'

import ReadCode from '@/components/codeRead/readCode'
import 'styles/sourcecode.css'

const CountTriangles = () => {
  const filePath =
    'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/count_triangles.js'

  return (
    <div>
      <ul>
        <li>
          <h1>
            count_triangles() ={'>'} {count_triangles().toString()}
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

export default CountTriangles
