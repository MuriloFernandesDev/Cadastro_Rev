import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import MyDocument from './_document'
import { Html } from 'next/document'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
