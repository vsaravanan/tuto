// components/layout.js
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner'
import ErrorComponent from 'components/ErrorComponent'
import Header from 'components/header'
import Sidebar from 'components/Sidebar'
import Footer from 'components/footer'
import { cError, cFinished, cIdle, cLayout, cProgress } from '@/redux/statusoSlice'

const Layout = ({ children }) => {
  const { isLoading, error } = useSelector(state => state.posts)
  const { statuso } = useSelector(state => state.statuso)
  return (
    <>
      <Header />
      <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div className='bg-primary flex-1 p-4 text-white'>
          <p>{` statuso ${statuso?.layout}`}</p>
          <p>{` isLoading ${isLoading}`}</p>
          <p>{`error ${error}`}</p>

          {isLoading || statuso?.layout === cProgress ? <LoadingSpinner /> : ''}

          {error || statuso?.layout === cError ? <ErrorComponent /> : <main>{children}</main>}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
{
  /* {spin ? <LoadingSpinner /> : pageerror ? <ErrorComponent /> : <main>{children}</main>} */
}
