import Head from 'next/head'
import { ActiveLink } from '../components/Register/ActiveLink'
import { Register } from '../components/Register/Header'

export default function Page1() {
    return (
        <>
            <Head>
                <title>Page1 | Murilo</title>
            </Head>

            {/* <Register /> */}

            <div className="white p-2 flex flex-col justify-between min-h-screen">
                <div>
                    <h1>Bem-vindo a BuyPhone</h1>
                    <p>Para criar seu cadastro veja se você:</p>
                    <ul>
                        <li>1. É um revendedor de iPhones.</li>
                        <li>
                            2. Tem a intenção de comprar produtos no atacado
                            para obter desconto.
                        </li>
                        <li>
                            3. Possui loja física, online ou tem como comprovar
                            que revende tais produtos.
                        </li>
                        <li>4. Tem seus documentos em mãos.</li>
                    </ul>
                </div>

                <ActiveLink
                    activeClassName="w-5/6 bg-Loja rounded-md uppercase text-xl flex items-center justify-center text-white mx-auto"
                    href="/Page2"
                >
                    <a className="w-5/6 bg-Loja rounded-md uppercase text-xl flex items-center justify-center text-white mx-auto">
                        Próximo
                    </a>
                </ActiveLink>
            </div>
        </>
    )
}
