import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from './components/Header'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <>
            {router.route === `/` ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <Header />
                    <Component {...pageProps} />
                </>
            )}
        </>
    )
}

export default MyApp
