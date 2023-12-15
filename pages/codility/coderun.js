import ReadCode from '@/components/codeRead/readCode'
import { useRouter } from 'next/router'
import { count_triangles } from '@/components/codility/count_triangles'
import { odd_occurrences } from '@/components/codility/odd_occurrences'
import { find5thBigNum } from '@/components/codility/find5thBigNum'
import { max_counters } from '@/components/codility/max_counters'
import { max_non_overlapping_segments } from '@/components/codility/max_non_overlapping_segments'
import { max_product_three } from '@/components/codility/max_product_three'
import { max_occurrence } from '@/components/codility/max_occurrence'
import 'styles/sourcecode.css'
import { max_slice_sum } from '@/components/codility/max_slice_sum'
import { mini_max_sum } from '@/components/codility/mini_max_sum'
import { change_coins } from '@/components/codility/change_coins'
import { palindrome } from '@/components/codility/palindrome'
import { tape_equilibrium } from '@/components/codility/tape_equilibrium'
import { tie_ropes } from '@/components/codility/tie_ropes'
import { cyclic_rotation } from '@/components/codility/cyclic_rotation'
import { common_prime_divisors } from '@/components/codility/common_prime_divisors'
import { climbing_the_leaderboard } from '@/components/codility/climbing_the_leaderboard'
import { binary_gap } from '@/components/codility/binary_gap'
import { diagonal_difference } from '@/components/codility/diagonal_difference'
import { permutator } from '@/components/codility/permutator'
import { factorial } from '@/components/codility/factorial'

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

const call_max_occurrence = p => {
  return max_occurrence(p)
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

const call_palindrome = p => {
  return palindrome(p)
}

const call_tie_ropes = (p, n) => {
  return tie_ropes(p, n)
}

const call_cyclic_rotation = (p, n) => {
  return cyclic_rotation(p, n)
}

const call_common_prime_divisors = (p, n) => {
  return common_prime_divisors(p, n)
}

const call_climbing_the_leaderboard = (p, n) => {
  return climbing_the_leaderboard(p, n)
}

const call_binary_gap = (p, n) => {
  return binary_gap(p, n)
}

const call_tape_equilibrium = (p, n) => {
  return tape_equilibrium(p, n)
}

const call_diagonal_difference = p => {
  return diagonal_difference(p)
}

const call_permutator = p => {
  return permutator(p)
}

const call_factorial = p => {
  let a = factorial(p)
  console.log(a)
  return a
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
                } else if (typeof d == 'boolean') {
                  d = `${d}`
                } else if (typeof d == 'bigint') {
                  d = `${d}`
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
