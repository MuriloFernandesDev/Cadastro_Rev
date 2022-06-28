import Link from 'next/link'
import Button from './components/Button'

export default function Welcome() {
    return (
        <>
            <h1 className="font-bold text-2xl text-black">
                Bem-vindo a BuyPhone
            </h1>

            <p className="pb-5">Para criar seu cadastro veja se você:</p>

            <ul className="flex flex-col justify-between">
                <li>1. É um revendedor de iPhones.</li>
                <li>
                    2. Tem a intenção de comprar produtos no atacado para obter
                    desconto.
                </li>
                <li>
                    3. Possui loja física, online ou tem como comprovar que
                    revende tais produtos.
                </li>
                <li>4. Tem seus documentos em mãos.</li>
            </ul>

            <Link href="/RegName">
                <a>
                    <Button />
                </a>
            </Link>
        </>
    )
}
