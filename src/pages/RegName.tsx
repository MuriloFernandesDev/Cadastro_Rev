import Link from 'next/link'
import Button from './components/Button'
import Progress from './components/Progress'

export default function RegName() {
    return (
        <>
            <h1 className="font-semibold text-sm text-black opacity-50">
                Vamos começar
            </h1>

            <h2 className="pb-5 text-black text-xl font-semibold">
                Qual seu nome completo?
            </h2>
            <form action="InsertName">
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    Nome completo
                </label>
                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    type="text"
                />
            </form>

            {/* <div className="flex justify-center w-full items-center mt-10">
                <Link href={'/RegCpf'}>
                    <a className="text-white bg-Loja uppercase text-lg font-semi-bold rounded-md w-full flex justify-center">
                        Próximo
                    </a>
                </Link>
            </div> */}
        </>
    )
}
