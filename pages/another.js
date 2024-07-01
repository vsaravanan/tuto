import CodePublisher from '@/components/codeRead/codePublisher'

export const getStaticProps = async () => {
  return {
    props: {
      a: 'abcfe',
    },
  }
}

const Another = ({ a }) => {
  return (
    <div>
      bb {a} {/* <CodePublisher /> */}
    </div>
  )
}

export default Another
