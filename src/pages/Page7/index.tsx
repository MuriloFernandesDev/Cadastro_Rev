import Head from 'next/head'
import { ActiveLink } from '../components/Register/ActiveLink'
import { Register } from '../components/Register/Header'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '/styles.module.scss'
import Timer from './Timer'

export default function Page7() {
    return (
        <>
            <Head>
                <title>Page7 | Murilo</title>
            </Head>

            <Register />
            <div className="bg-Loja">
                <div className="bg-white min-h-screen flex flex-col rounded-t-xl p-3">
                    <div className="flex w-full items-center justify-between">
                        <Link href={'/Page6'}>
                            <a>
                                <img src="/back.png" alt="" />
                            </a>
                        </Link>
                        <progress
                            className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                            value="80"
                            max="100"
                        ></progress>
                    </div>
                    <div className="flex flex-col min-h-screen">
                        <div className="flex flex-col justify-between h-32 mt-2">
                            <h1 className="font-semibold text-sm text-black opacity-50">
                                Falta pouco
                            </h1>

                            <h2 className="pb-5 text-black text-xl font-semibold">
                                Confirmação de e-mail
                            </h2>
                            <h3 className="font-semibold pb-5 text-sm text-black opacity-50">
                                Informe o código enviado para o e-mail:
                            </h3>

                            <Timer />

                            <div className="flex gap-3 mx-auto p-2">
                                <form action="InsertSenha">
                                    <input
                                        className="border text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
                                        type="number"
                                        id="nome"
                                        maxLength={1}
                                    />
                                </form>
                                <form action="InsertSenha">
                                    <input
                                        className="border text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
                                        type="number"
                                        id="nome"
                                        maxLength={1}
                                    />
                                </form>
                                <form action="InsertSenha">
                                    <input
                                        className="border text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
                                        type="number"
                                        id="nome"
                                        maxLength={1}
                                    />
                                </form>
                                <form action="InsertSenha">
                                    <input
                                        className="border text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
                                        type="number"
                                        id="nome"
                                        maxLength={1}
                                        min="0"
                                        max="1"
                                    />
                                </form>
                            </div>
                        </div>

                        <div className="flex justify-center w-full items-center mt-20">
                            <Link href={'/Page8'}>
                                <a className="text-white bg-Loja uppercase text-lg font-semi-bold rounded-md w-full flex justify-center">
                                    CONCLUIR CADASTRO
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
