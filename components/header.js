import useUtilStore from '@/redux/utilSlice'
import Link from 'next/link'
import { FaGithub, FaLaptop, FaVk, FaYoutube } from 'react-icons/fa'
// components/Header.js
const Header = () => {
  const { showSidebar, toggleSidebar } = useUtilStore(state => {
    return {
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
            Presentation. Primary skills in java, springboot, reactjs, nextjs, linux, crypto. This
            website is built on
            <br></br>
            linux, nginx, pm2, reactjs, nextjs, redux, zustand, jdk21, spring boot, reactive,
            docker, multiple google cloud VMs
            <br></br> and with the help of ChatGPT 😊 ( Contact : Mobile: +65-85118487,
            saravanan.resume@gmail.com )
          </div>

          <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
            <Link className='text-white/90 hover:text-white' href='/' as='/'>
              <span
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                <FaVk />
              </span>
            </Link>
            <Link className='text-white/90 hover:text-white' href='https://youtu.be/xgsQvI-Eyg4'>
              <FaYoutube />
            </Link>
            <Link className='text-white/90 hover:text-white' href='https://saravanjs.com/'>
              <FaLaptop />
            </Link>
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
