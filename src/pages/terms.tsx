import Image from 'next/image'
import { useRouter } from 'next/router'
import ConcluirImg from '../../public/undrawn.png'
import Progress from '../components/Progress'

export default function terms() {
  const router = useRouter()
  function handleClick() {
    router.push('/conclusion')
  }
  return (
    <>
      <Progress value="90" />
      <div className="grid gap-3">
        <h1 className="text-black text-xl font-semibold mt-8">
          Termos & Condições
        </h1>
        <div className="w-64 h-auto flex justify-center mx-auto">
          <Image src={ConcluirImg} layout="fixed"></Image>
        </div>
        <h2>
          Ao finalizar, você aceita os{' '}
          <a
            href="https://pedidos.buyphone.com.br/terms-of-service"
            className="font-medium"
            target="_blank"
          >
            Termos & Condições
          </a>{' '}
          e{' '}
          <a
            href="https://pedidos.buyphone.com.br/terms-of-service"
            className="font-medium"
            target="_blank"
          >
            Politíca de Privacidade
          </a>
        </h2>
        <button onClick={handleClick} className="btn btn-primary" type="submit">
          finalizar
        </button>
      </div>
    </>
  )
}
