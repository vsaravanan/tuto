import ReadCode from '@/components/codeRead/readCode'
import { useRouter } from 'next/router'
import { count_triangles } from '@/components/codility/count_triangles'
import { odd_occurrences } from '@/components/codility/odd_occurrences'
import { find5thBigNum } from '@/components/codility/find5thBigNum'
import { max_counters } from '@/components/codility/max_counters'
import { max_non_overlapping_segments } from '@/components/codility/max_non_overlapping_segments'
import { max_product_three } from '@/components/codility/max_product_three'
import { maxOccurrence } from '@/components/codility/maxOccurrence'
import 'styles/sourcecode.css'
import { max_slice_sum } from '@/components/codility/max_slice_sum'
import { mini_max_sum } from '@/components/codility/mini_max_sum'
import { change_coins } from '@/components/codility/change_coins'

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

const call_max_non_overlapping_segments = (p, n) => {
  return max_non_overlapping_segments(p, n)
}

const call_max_product_three = (p, n) => {
  return max_product_three(p, n)
}

const call_maxOccurrence = p => {
  return maxOccurrence(p)
}

const call_max_slice_sum = p => {
  return max_slice_sum(p)
}

const call_mini_max_sum = p => {
  return mini_max_sum(p)
}

const call_change_coins = p => {
  return change_coins(p)
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
                  d = d.map((c, i) => {
                    return <div key={i}> {c + ', '} </div>
                  })
                }

                return (
                  <div key={i}>
                    {c} ={'>'}
                    <span className='answer'>{d}</span>
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
