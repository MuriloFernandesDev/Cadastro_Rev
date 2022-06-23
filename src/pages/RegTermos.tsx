import Head from 'next/head'
import { Register } from './components/Header'
import Link from 'next/link'
import Image from 'next/image'
import ConcluirImg from '../../public/undrawn.png'

export default function RegTermos() {
    return (
        <>
            <Register />

            <div className="bg-white">
                <div className="bg-white w-full flex flex-col rounded-t-xl p-3 absolute -mt-[9px]">
                    <div className="flex w-full items-center justify-between">
                        <Link href={'/Page7'}>
                            <a>
                                <img src="/back.png" alt="" />
                            </a>
                        </Link>
                        <progress
                            className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                            value="90"
                            max="100"
                        ></progress>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-between h-32 mt-2">
                            <h1 className="pb-5 text-black text-xl font-semibold">
                                Termos & Condições
                            </h1>
                            <div className="w-64 h-auto flex justify-center mx-auto pb-2">
                                <Image src={ConcluirImg} layout="fixed"></Image>
                            </div>
                            <h2>
                                Ao finalizar, você aceita os Termos & Condições
                                e Política de Privacidade
                            </h2>
                        </div>

                        <div className="flex justify-center w-full items-center mt-64">
                            <Link href={'/Page9'}>
                                <a className="text-white bg-Loja uppercase text-lg font-semi-bold rounded-md w-full flex justify-center">
                                    FINALIZAR
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
