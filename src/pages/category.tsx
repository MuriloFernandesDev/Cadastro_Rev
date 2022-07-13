import Image from 'next/image'
import Progress from './components/Progress'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from './components/Button'
import Checkbox from './components/checkbox'

export default function category() {
  const router = useRouter()

  function submit() {
    router.push('/sendfile')
  }

  return (
    <>
      <Progress value="80" />
      <div className="grid gap-8 mt-8">
        <div>
          <h1 className="text-black text-xl font-semibold">
            Selecione as categorias de produtos mais vendidas em seu negócio.
          </h1>
          <h2 className="text-Loja opacity-50 text-sm mt-2">
            Isso nos ajuda a melhoras e implementar novas condições e
            funcionalidades que sejam mais compatíveis com seu negócio.
          </h2>
        </div>

        <Checkbox value="11 (128Gb - Branco)" value2="check1" />
        <Checkbox value="13 Pro Max (256Gb - Prateado)" value2="check2" />

        <div onClick={submit}>
          <Button />
        </div>
      </div>
    </>
  )
}
