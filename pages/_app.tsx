import type { AppProps as I_AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: I_AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
