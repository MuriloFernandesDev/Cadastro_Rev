import Head from 'next/head'
import Link from 'next/link'

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
            <div className="min-h-screen bg-Loja">
                <div className="w-full bg-white">
                    <div className="flex flex-col items-center mt-4 bg-white">
                        <img src="/Logo1.png" alt="Logo BuyPhone" />
                        <img src="/Cel.png" alt="Celular Flutuando" />
                    </div>
                </div>
                <div className="w-full bg-Loja">
                    <div className="w-[90%] mx-auto p-2 gap-3 flex flex-col justify-around items-center text-white">
                        <h1 className="font-bold text-2xl">
                            A oportunidade de aumentar o lucro de suas vendas
                        </h1>
                        <p className="text-xs">
                            Tenha acesso a preços imbatíveis de iPhones
                            nacionais lacrados para revenda!
                        </p>
                        <a
                            className="w-full h-[38px] text-Loja font-medium text-xs uppercase bg-white rounded-md flex items-center justify-center"
                            href="#"
                        >
                            Entrar
                        </a>
                        <Link href={'/Welcome'}>
                            <a className="w-full h-[38px] border font-medium text-xs uppercase border-white rounded-md flex items-center justify-center">
                                Cadastrar
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
