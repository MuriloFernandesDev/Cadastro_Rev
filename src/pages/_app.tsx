import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Corpo from './components/Corpo'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      {router.route === `/` || router.route === `/home` ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Toaster position="top-right" />
          <Corpo>
            <Component {...pageProps} />
          </Corpo>
        </>
      )}
    </>
  )
}
export default MyApp
