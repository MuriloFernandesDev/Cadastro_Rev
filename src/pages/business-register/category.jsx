import Image from 'next/image'
import Progress from '../../components/Progress'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Checkbox from '../../components/checkbox'
import React, { useEffect, useState } from 'react'

export default function category({ Data }) {
  const router = useRouter()

  function submit() {
    router.push('/business-register/sendfile')
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
        <div className="flex flex-wrap gap-3">
          {Data.length > 0 ? (
            Data.map((p) => (
              <Checkbox key={p.id} value={p.name} value2={p.id}>
                {' '}
              </Checkbox>
            ))
          ) : (
            <span>Categoria de produtos não disponíveis.</span>
          )}
        </div>
        <div onClick={submit}>
          <Button />
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const Auth = 'ef7223f0-55b4-49a7-9eed-f4b4ef14b2f1'
  const URL = 'https://pedidos.buyphone.com.br/api/categories'

  // configurar variavel de ambiente

  const res = await fetch(URL, { headers: { token: Auth } })
  const data = await res.json()
  const Data = data.data
  return {
    props: {
      Data,
    },
    revalidate: 60 * 60 * 24 * 30,
  }
}