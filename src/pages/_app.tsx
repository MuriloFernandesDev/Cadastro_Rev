import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Primary } from './components/Primary'
import { Register } from './components/Register/Header'
// import React, { useRouter } from 'next/router'
// const router = useRouter()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        // <>
        //     {router.route === `/login` || router.route === `/register` ? (
        //         <Component {...pageProps} />
        //     ) : (
        <>
            <Component {...pageProps} />
        </>
        //     )}
        // </>
    )
}

export default MyApp
