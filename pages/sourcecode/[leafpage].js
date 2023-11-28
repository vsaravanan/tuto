import ReadCode from '@/components/codeRead/readCode'
import { useRouter } from 'next/router'

const SourceCode = () => {
  const router = useRouter()
  const { leafpage } = router.query
  return (
    <div>
      <ReadCode filePath={leafpage} />
    </div>
  )
}

export default SourceCode
