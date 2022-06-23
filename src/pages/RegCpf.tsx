import Link from 'next/link'

export default function RegCpf() {
    return (
        <>
            <div className="bg-white">
                <div className="bg-white w-full flex flex-col rounded-t-xl p-3 absolute -mt-[9px]">
                    <div className="flex w-full items-center justify-between">
                        <Link href={'/Page2'}>
                            <a>
                                <img src="/back.png" alt="" />
                            </a>
                        </Link>
                        <progress
                            className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                            value="30"
                            max="100"
                        ></progress>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-between h-32 mt-2">
                            <h2 className="pb-5 text-black text-xl font-semibold">
                                Qual seu CPF?
                            </h2>
                            <form action="InsertCpf">
                                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                                    CPF
                                </label>
                                <input
                                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                                    type="number"
                                    id="nome"
                                />
                            </form>
                        </div>

                        <div className="flex justify-center w-full items-center mt-10">
                            <Link href={'/RegEmail'}>
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
