import Link from 'next/link'
import Button from '../../components/Button'
import Progress from '../../components/Progress'
import Router, { useRouter } from 'next/router'

export default function wel() {
  const router = useRouter()
  function Rota() {
    router.push('/register/name')
  }
  return (
    <>
      <Progress value="10" />
      <div className="grid gap-6">
        <div className="mt-6">
          <h1 className="font-bold text-2xl text-black">
            Bem-vindo a BuyPhone
          </h1>

          <h2 className="pb-5">Para criar seu cadastro veja se você:</h2>
        </div>
        <ul className="flex flex-col justify-between">
          <li>1. É um revendedor de iPhones.</li>
          <li>
            2. Tem a intenção de comprar produtos no atacado para obter
            desconto.
          </li>
          <li>
            3. Possui loja física, online ou tem como comprovar que revende tais
            produtos.
          </li>
          <li>4. Tem seus documentos em mãos.</li>
        </ul>

        <button onClick={Rota}>
          <Button />
        </button>
      </div>
    </>
  )
}
