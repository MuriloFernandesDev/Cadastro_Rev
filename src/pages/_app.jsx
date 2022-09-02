import '../../styles/globals.scss'
import { useRouter } from 'next/router'
import Corpo from '../components/Corpo'
import { Toaster } from 'react-hot-toast'
import { StylesProvider, createGenerateClassName } from '@mui/styles'
import ClientOnly from './ClientOnly'

export default function MyApp({ Component, pageProps }) {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'c',
  })
  const router = useRouter()
  return (
    <ClientOnly>
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
    </ClientOnly>
  )
}
