import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../Components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
        Caio Goulart | Dev
              </title>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"></meta>
    </Head>
    <Header/>
  <Component {...pageProps} />
</>
  )}

export default MyApp
