import Head from 'next/head'
import Primary from './Primary'

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

            <Primary />
        </>
    )
}
