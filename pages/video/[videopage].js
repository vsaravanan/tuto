// import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

const VideoPage = () => {
  const router = useRouter()
  const { videopage } = router.query

  return (
    <>
      {/* <Head>
        <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />
        <title>{videopage}</title>
      </Head> */}

      <ReactPlayer url={videopage} controls={true} width='800px' height='450px' />
    </>
  )
}

export default VideoPage
