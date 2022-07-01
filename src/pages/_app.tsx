import '../../styles/globals.scss'
import { useRouter } from 'next/router'
import Corpo from './components/Corpo'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <>
            {router.route === `/` ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <Corpo valor={1}>
                        <Component {...pageProps} />
                    </Corpo>
                </>
            )}
        </>
    )
}

export default MyApp
