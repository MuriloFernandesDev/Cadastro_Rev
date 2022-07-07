import Image from 'next/image'
import { useRouter } from 'next/router'
import ConcluirImg from '../../public/undrawn.png'
import Progress from './components/Progress'

export default function RegTermos() {
  const router = useRouter()
  function handleClick() {
    router.push('/conclusion')
  }
  return (
    <>
      <Progress value="90" />
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
      <button
        onClick={handleClick}
        className="flex mt-[1.5rem] justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
        type="submit"
      >
        finalizar
      </button>
    </>
  )
}
