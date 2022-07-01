import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Corpo from './components/Corpo'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <>
            {router.route === `/` ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <Corpo>
                        <Component {...pageProps} />
                    </Corpo>
                </>
            )}
        </>
    )
}

export default MyApp
