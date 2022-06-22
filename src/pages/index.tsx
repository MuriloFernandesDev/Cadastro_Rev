import Head from 'next/head'
import { Primary } from './components/Primary'

export default function Home() {
    return (
        <>
            <Head>
                <title>BuyPhone</title>
                <meta
                    name="description"
                    content="Buy Phone para revendedores!"
                />
            </Head>

            <main>
                <Primary />
            </main>
        </>
    )
}
