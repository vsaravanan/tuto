// components/layout.js
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner'
import ErrorComponent from 'components/ErrorComponent'
import Header from 'components/header'
import Footer from 'components/footer'
import useStatusoStore, { cError, cFinished, cIdle, cLayout, cProgress } from '@/redux/statusoSlice'
import CodePublisher from 'components/codeRead/codePublisher'
import { Sidebar } from 'components/Sidebar'
import useUtilStore from '@/redux/utilSlice'
import Link from 'next/link'

const Layout = ({ children }) => {
  const { isLoading, error } = useSelector(state => state.posts)
  const statuso = useStatusoStore(state => state.statuso)

  const { content, keyp, showSidebar, selectMenu } = useUtilStore(state => {
    return {
      content: state.content,
      keyp: state.keyp,
      showSidebar: state.showSidebar,
      selectMenu: state.selectMenu,
    }
  })

  const show_sidebar = showSidebar ? 'sidebar-open' : 'sidebar-close'

  let listurl = process.env.NEXT_PUBLIC_listskills
  let externalurl = process.env.NEXT_PUBLIC_serverjs

  let url = content !== '' ? `${listurl}${content}.htm` : ''

  let angular = content.startsWith('angularjs/angularjs1')
  // console.log(content + '  ' + angular)

  const openExternalPage = (title, url) => {
    let mytitle = encodeURIComponent(title)
    let myurl = encodeURIComponent(url)
    // selectMenu({ keyp: false })
    let iframecontainer = !!angular ? 'iframew' : 'iframe'
    const openNewTab = () => {
      window.open(`${externalurl}${iframecontainer}/${mytitle}/${myurl}`, '_blank')
    }
    return openNewTab()
  }

  if (!!keyp) {
    openExternalPage(content, url)
  }
  let angularurl = `${listurl}${content}.txt`
  angularurl = angularurl.replace(`${listurl}angularjs/angularjs1`, `${listurl}hidden`)
  // console.log(angularurl)

  useEffect(() => {
    if (!!keyp) {
      selectMenu({ keyp: false })
    }
  }, [keyp])

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
                  {children && content === '' ? (
                    children
                  ) : (
                    <>
                      <iframe
                        id='iframeid'
                        title={content}
                        src={url}
                        className={!!angular ? 'iframew vh30' : ''}
                        // style={{
                        //   // ...(!!angular && { backgroundColor: '#FFFFFF' }),
                        //   margin: '0',
                        //   overflow: 'hidden',
                        // }}
                        width='100%'
                        height='100%'
                        // sandbox='allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation allow-top-navigation-by-user-activation'
                      ></iframe>
                      {!angular ? (
                        ''
                      ) : (
                        <div>
                          <Link
                            className='link2'
                            href={angularurl}
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            {angularurl}
                          </Link>
                          <CodePublisher filePath={angularurl} />
                        </div>
                      )}
                    </>
                  )}
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
