import Image from 'next/image'
import ConcluirImg from '../../public/undrawn.png'

export default function RegTermos() {
    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Termos & Condições
            </h1>
            <div className="w-64 h-auto flex justify-center mx-auto pb-2">
                <Image src={ConcluirImg} layout="fixed"></Image>
            </div>
            <h2>
                Ao finalizar, você aceita os Termos & Condições e Política de
                Privacidade
            </h2>
        </>
    )
}
