// components/layout.js
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner'
import ErrorComponent from 'components/ErrorComponent'
import Header from 'components/header'
import Footer from 'components/footer'
import useStatusoStore, { cError, cFinished, cIdle, cLayout, cProgress } from '@/redux/statusoSlice'
import { Sidebar } from 'components/SideBar'
import useUtilStore from '@/redux/utilSlice'

const Layout = ({ children }) => {
  const { isLoading, error } = useSelector(state => state.posts)
  const statuso = useStatusoStore(state => state.statuso)

  const { content, showSidebar } = useUtilStore(state => {
    return {
      content: state.content,
      showSidebar: state.showSidebar,
    }
  })

  const show_sidebar = showSidebar ? 'sidebar-open' : 'sidebar-close'

  let listurl = process.env.NEXT_PUBLIC_listskills

  let url = content ? `${listurl}${content}.htm` : `${listurl}redux/redux.htm`

  return (
    <div>
      <Header />
      <div className='h-screen flex flex-row justify-start'>
        <aside id='mySidebar' className={` ${show_sidebar} `}>
          <Sidebar />
        </aside>
        <article id='myArticle' className='bg-primary flex-1 p-4 text-white'>
          <div>
            {/* <p>{` statuso ${statuso?.layout}`}</p>
            <p>{` isLoading ${isLoading}`}</p>
            <p>{`error ${error}`}</p> */}

            {isLoading || statuso?.layout === cProgress ? <LoadingSpinner /> : ''}

            {error || statuso?.layout === cError ? (
              <ErrorComponent />
            ) : (
              <>
                <main>
                  {content}
                  {children}
                  <iframe
                    id='iframeid'
                    title='tutorials'
                    src={url}
                    sandbox='allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation allow-top-navigation-by-user-activation'
                  ></iframe>
                </main>
              </>
            )}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
