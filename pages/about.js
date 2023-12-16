import {
  array_manipulation,
  array_manipulation_old,
} from '@/components/codility/array_manipulation'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>← Back to home</Link>
        {array_manipulation_old()}
        {array_manipulation()}
      </h2>
    </>
  )
}
