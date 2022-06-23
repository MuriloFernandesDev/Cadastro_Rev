import Head from 'next/head'
import { Register } from './components/Header'
import Link from 'next/link'
import Image from 'next/image'
import GroupImg from '../../public/group.png'

export default function RegConc() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="bg-white w-full flex flex-col rounded-t-xl p-3 absolute -mt-[9px]">
                    <div className="flex flex-col w-full items-center justify-between">
                        <img src="/foguete.svg" alt="" />

                        <div className="flex flex-col min-h-screen">
                            <div className="flex flex-col gap-3 justify-between h-32 mt-2">
                                <h1 className="text-black text-xl font-semibold">
                                    Tudo pronto!
                                </h1>
                                <h2 className="text-black">
                                    Agora é só aguardar
                                </h2>

                                <h3 className="text-sm">
                                    O seu cadastro de usuário foi concluído e
                                    está sob análise. Enviaremos a resposta da
                                    sua solicitação em seu e-mail e também
                                    atualizaremos aqui.
                                </h3>
                                <div className="w-64 h-auto">
                                    <Image
                                        src={GroupImg}
                                        layout="responsive"
                                        quality={100}
                                    ></Image>
                                </div>
                            </div>

                            <div className="flex justify-center w-full items-center mt-72">
                                <Link href={'/#'}>
                                    <a className="text-white bg-Loja uppercase text-lg p-2 font-semi-bold rounded-md w-full flex justify-center">
                                        entrar
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
