import '../styles/globals.css'
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
    </Head>
    <Header/>
  <Component {...pageProps} />
</>
  )}

export default MyApp
