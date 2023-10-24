// components/layout.js
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner'
import ErrorComponent from 'components/ErrorComponent'
import Header from 'components/header'
import Footer from 'components/footer'
import { cError, cFinished, cIdle, cLayout, cProgress } from '@/redux/statusoSlice'
import { Sidebar } from 'components/SideBar'

const Layout = ({ children }) => {
  const { isLoading, error } = useSelector(state => state.posts)
  const { statuso } = useSelector(state => state.statuso)

  return (
    <div>
      <Header />
      <div>
        <Sidebar></Sidebar>
        <div>
          <p>{` statuso ${statuso?.layout}`}</p>
          <p>{` isLoading ${isLoading}`}</p>
          <p>{`error ${error}`}</p>

          {isLoading || statuso?.layout === cProgress ? <LoadingSpinner /> : ''}

          {error || statuso?.layout === cError ? <ErrorComponent /> : <main>{children}</main>}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
{
  /* {spin ? <LoadingSpinner /> : pageerror ? <ErrorComponent /> : <main>{children}</main>} */
}
