import Head from 'next/head'
import { Register } from './components/Header'
import Link from 'next/link'

export default function RegEmail() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="bg-white w-full flex flex-col rounded-t-xl p-3 absolute -mt-[9px]">
                    <div className="flex w-full items-center justify-between">
                        <Link href={'/Page3'}>
                            <a>
                                <img src="/back.png" alt="" />
                            </a>
                        </Link>
                        <progress
                            className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                            value="40"
                            max="100"
                        ></progress>
                    </div>
                    <div className="flex flex-col min-h-screen">
                        <div className="flex flex-col justify-between h-32 mt-2">
                            <h2 className="pb-5 text-black text-xl font-semibold">
                                Qual seu email?
                            </h2>
                            <form action="InsertEmail">
                                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                                    E-mail
                                </label>
                                <input
                                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                                    type="text"
                                    id="nome"
                                />
                            </form>
                        </div>

                        <div className="flex justify-center w-full items-center mt-10">
                            <Link href={'/RegCelular'}>
                                <a className="text-white bg-Loja uppercase text-lg font-semi-bold rounded-md w-full flex justify-center">
                                    Próximo
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
