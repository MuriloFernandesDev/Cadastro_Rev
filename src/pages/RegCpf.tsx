import Link from 'next/link'

export default function RegCpf() {
    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Qual seu CPF?
            </h1>
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
        </>
    )
}
