
import type { AppProps } from 'next/app'
import Layout from 'layouts/Layout'
import 'styles/general.css'
import 'styles/navbar.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
