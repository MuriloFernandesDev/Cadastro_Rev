import Link from 'next/link'
import Timer from './Timer'

export default function RegConfirmation() {
    return (
        <>
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

            <div className="flex gap-3 justify-center p-2">
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
        </>
    )
}
