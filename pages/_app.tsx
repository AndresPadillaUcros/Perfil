
import type { AppProps } from 'next/app'
import Layout from 'layouts/Layout'
import 'styles/general.css'
import 'styles/navbar.css'
import 'styles/icons.css'
import 'styles/profile.css'
import 'styles/swiper.css'
import 'styles/portfolio.css'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
