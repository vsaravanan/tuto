import useUtilStore from '@/redux/utilSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome, FaGithub, FaYoutube } from 'react-icons/fa'
import { FcManager } from 'react-icons/fc'
import ClientDetailsHead from './ClientDetailsHead'

// components/Header.js
const Header = () => {
  const { content, showSidebar, toggleSidebar } = useUtilStore(state => {
    return {
      content: state.content,
      showSidebar: state.showSidebar,
      toggleSidebar: state.toggleSidebar,
    }
  })

  const show_click = !showSidebar ? (
    <>
      <span style={{ fontSize: 16 }}>{' 👈 click '}</span>
    </>
  ) : (
    ''
  )
  let heading

  if (!content) {
    const router = useRouter()
    const { leafpage } = router.query
    heading = leafpage
    // headings = leafpage && leafpage.match(/.{1,100}/g)

    // headings.map((e, i) => (
    //   <span>
    //     {e}
    //     <br />
    //   </span>
  }

  return (
    <header className='header'>
      <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
          <button
            className='openbtn'
            onClick={() => {
              toggleSidebar()
            }}
          >
            ☰ {show_click}
          </button>
          <div>
            {content ||
              (heading && (
                <Link className='link' href={heading} rel='noopener noreferrer' target='_blank'>
                  raw copy
                </Link>
              ))}
          </div>

          <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
            <div className='text-blue-400 text-sm lg:text-base'>
              <ClientDetailsHead />
            </div>
            <Link className='text-white/90 hover:text-white' href='/' as='/'>
              <span
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                <FaHome />
              </span>
            </Link>
            <Link className='text-white/90 hover:text-white' href='https://saravanjs.com/'>
              <FcManager />
            </Link>
            {/* <Link className='text-white/90 hover:text-white' href='https://youtu.be/xgsQvI-Eyg4'>
              <FaYoutube />
            </Link> */}
            <Link className='text-white/90 hover:text-white' href='https://github.com/vsaravanan'>
              <FaGithub />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
