import Button from './components/Button'
import Timer from './Timer'
import { useState } from 'react'
import { useLocalStorage } from '../utils/useLocalStorage'

export default function confirmation(_valor: '30') {
  const [email] = useLocalStorage('email', '')

  const numerOfInputs = 4

  const [inputRefsArray] = useState(() => Array.from({ length: numerOfInputs }))

  return (
    <>
      <h1 className="font-semibold text-sm text-black opacity-50">
        Falta pouco
      </h1>
      <h2 className="pb-5 text-black text-xl font-semibold">
        Confirmação de e-mail
      </h2>
      <h3 className="font-medium text-sm text-black opacity-50">
        Informe o código enviado para o e-mail:
      </h3>
      <p className="font-medium pb-5 text-sm text-black opacity-50">{email}</p>
      <Timer />
      <div className="flex gap-3 justify-center p-2">
        {inputRefsArray.map((index) => {
          return (
            <input
              className="border flex text-center text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
              type="text"
              maxLength={1}
              id={`box${index}`}
            />
          )
        })}
      </div>
      <Button />
    </>
  )
}
