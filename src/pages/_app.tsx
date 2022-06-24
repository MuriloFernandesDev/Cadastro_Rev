import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from './components/Header'
import RegConc from './RegConc'
import Corpo from './components/Corpo'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <>
            {router.route === `/` ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <Toaster position="bottom-right" />
                    <Header />
                    <Corpo>
                        <Component {...pageProps} />
                    </Corpo>
                </>
            )}
        </>
    )
}

export default MyApp
