import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from './components/Header'
import RegConc from './RegConc'
import Corpo from './components/Corpo'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <>
            {router.route === `/` ? (
                <Component {...pageProps} />
            ) : (
                <>
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
