import styles from '/style.module.scss'
export function Primary() {
    return (
        <>
            <div className="w-full bg-white relative">
                {/* <div className="mx-auto w-[150%] h-96 bg-white rounded-[50%] absolute mt-16"></div> */}
                <div className="flex flex-col items-center mt-4">
                    <img src="/Logo1.png" alt="Logo BuyPhone" />
                    <img src="/Cel.png" alt="Celular Flutuando" />
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
                        <a
                            className="w-full h-[38px] border font-medium text-xs uppercase border-white rounded-md flex items-center justify-center"
                            href="/Register"
                        >
                            Cadastrar
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
