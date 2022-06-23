import Link from 'next/link'

export default function Welcome() {
    return (
        <>
            <div className="flex w-full items-center justify-between">
                <Link href={'/#'}>
                    <a>
                        <img src="/back.png" alt="" />
                    </a>
                </Link>
                <progress
                    className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                    value="10"
                    max="100"
                ></progress>
            </div>

            <h1 className="font-bold text-2xl text-black">
                Bem-vindo a BuyPhone
            </h1>
            <div className="text-black opacity-50 font-semibold text-lg">
                <p className="pb-5">Para criar seu cadastro veja se você:</p>

                <ul className="flex flex-col h-64 justify-between">
                    <li>1. É um revendedor de iPhones.</li>
                    <li>
                        2. Tem a intenção de comprar produtos no atacado para
                        obter desconto.
                    </li>
                    <li>
                        3. Possui loja física, online ou tem como comprovar que
                        revende tais produtos.
                    </li>
                    <li>4. Tem seus documentos em mãos.</li>
                </ul>
            </div>

            <div className="flex justify-center w-full items-center mt-10">
                <Link href={'/RegName'}>
                    <a className="text-white uppercase text-lg font-semi-bold bg-Loja rounded-md w-full flex justify-center">
                        Próximo
                    </a>
                </Link>
            </div>
        </>
    )
}
