import '../../styles/globals.scss'
import { useRouter } from 'next/router'
import Corpo from '../components/Corpo'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      {router.route === `/` || router.route === `/register/home` ? (
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
