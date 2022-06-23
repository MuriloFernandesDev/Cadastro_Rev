import Link from 'next/link'

export default function RegSenha() {
    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Vamos criar uma senha para o seu acesso?
            </h1>
            <form action="InsertSenha">
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    Senha
                </label>
                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    type="number"
                    id="nome"
                />
            </form>

            <form className="mt-6" action="InsertSenha">
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    Confirmar senha
                </label>
                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    type="number"
                    id="nome"
                />
            </form>
        </>
    )
}
