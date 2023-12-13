import ReadCode from '@/components/codeRead/readCode'
import 'styles/sourcecode.css'
import { useRouter } from 'next/router'
import { count_triangles } from '@/components/codility/count_triangles'
import { odd_occurrences } from '@/components/codility/odd_occurrences'
import { find5thBigNum } from '@/components/codility/find5thBigNum'
import { max_counters } from '@/components/codility/max_counters'

const call_count_triangles = p => {
  return count_triangles(p)
}

const call_odd_occurrences = p => {
  return odd_occurrences(p)
}

const call_find5thBigNum = p => {
  return find5thBigNum(p)
}

const call_max_counters = (p, n) => {
  return max_counters(p, n)
}

const coderun = () => {
  const router = useRouter()
  const { filePath, commands } = router.query
  console.log(filePath)
  console.log(commands?.length)

  return (
    <div>
      <ul>
        <li>
          {commands &&
            commands
              ?.filter(c => c.length > 0)
              .map((c, i) => {
                let d = eval(`call_${c}`)
                if (Object.prototype.toString.call(d) === '[object Array]') {
                  d = d.map(c => c + ', ')
                }

                return (
                  <div key={i}>
                    {c} ={'>'} {d}
                    <br></br>
                  </div>
                )
              })}

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

export default coderun
