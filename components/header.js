import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaVk } from 'react-icons/fa'
// components/Header.js
const Header = () => {
  return (
    <header className='header'>
      <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
          <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
            <Link href='/' className='text-white/90 no-underline hover:text-white'>
              Saravanan
            </Link>
          </h1>
          <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
            <Link className='text-white/90 hover:text-white' href='/'>
              <FaVk />
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
        <div>
          personal website. I am expert in java, springboot, reactjs, nextjs, linux, crypto{' '}
        </div>
      </nav>
    </header>
  )
}

export default Header
