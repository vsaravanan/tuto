import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

const VideoPage = () => {
  const router = useRouter()
  const { videopage } = router.query

  return (
    <>
      <ReactPlayer
        url={videopage}
        controls={true}
        playing={true}
        muted={true}
        width='800px'
        height='450px'
      />
    </>
  )
}

export default VideoPage
