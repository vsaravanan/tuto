// pages/_app.js
import 'styles/globals.css'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import Layout from 'components/layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
