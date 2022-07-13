import { useRouter } from 'next/router'
import Button from './components/Button'
import Progress from './components/Progress'

export default function sendfile() {
  const router = useRouter()

  function submit() {
    router.push('/phone')
  }
  return (
    <>
      <Progress value="90" />
      <div className="grid gap-8 mt-8">
        <div>
          <h1 className="text-black text-xl font-semibold">
            Envie os documentos para validação
          </h1>
          <ul className="text-Loja opacity-50 text-sm mt-2 grid gap-2">
            <li>1. Contrato social da empresa</li>
            <li>2. Sua CNH ou documento com foto que conste RG e CPF </li>
            <li>3. Comprovante de endereço</li>
          </ul>
        </div>

        <div onClick={submit}>
          <Button />
        </div>
      </div>
    </>
  )
}
