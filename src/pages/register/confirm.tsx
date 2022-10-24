import { useEffect, useState } from 'react'
import Progress from '../../components/Progress'
import { getLocalStorage } from '../../utils/localStorage'

export default function confirm() {
  const [storage, setStorage] = useState()
  useEffect(() => {
    const storage = getLocalStorage('@BuyPhone_email')
    setStorage(storage)
  }, [])

  return (
    <>
      <Progress value="90" />
      <form className="grid gap-8">
        <div className="mt-8 grid gap-3">
          <h1 className="font-semibold text-sm text-black opacity-50">
            Falta pouco
          </h1>
          <h2 className="text-black text-xl font-semibold">
            Confirmação de e-mail
          </h2>
          <div>
            <h3 className="font-medium text-sm text-black opacity-50">
              Informe o código enviado para o e-mail:
            </h3>
            <p className="font-medium text-sm text-black opacity-50">
              {storage && storage}
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-4"></div>
        <button className="btn btn-primary" type="submit">
          FINALIZAR CADASTRO
        </button>
      </form>
    </>
  )
}
