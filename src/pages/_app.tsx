import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Primary } from './components/Primary'
import { Register } from './components/Register/Header'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Primary /> */}
            <Register />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
