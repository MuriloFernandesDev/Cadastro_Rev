import { useState, createRef, useEffect } from 'react'
import Button from './components/Button'
import Progress from './components/Progress'
import Watch from './Timer'
import { useLocalStorage } from '../utils/useLocalStorage'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function confirm(props) {
  const [email] = useLocalStorage('email', '')
  const router = useRouter()
  const lineIndex = props.index
  const numerOfInputs = props?.numerOfInputs || 4

  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => '')
  )

  const handleKeyPress = (event) => {
    event.preventDefault()
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0
      const nextInput = inputRefsArray?.[nextIndex]?.current
      nextInput.focus()
      nextInput.select()
      return nextIndex
    })
  }

  useEffect(() => {
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus()
    }

    window.addEventListener('keyup', handleKeyPress, false)
    return () => {
      window.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  function handleClick(event) {
    event.preventDefault()
    var arr = JSON.stringify(letters)
      .replace(/,/g, '')
      .replace(/"/g, '')
      .replace('[', '')
      .replace(']', '')

    const data = {
      email: localStorage.getItem('email').replace('"', '').replace('"', ''),
      code: arr,
    }
    axios
      .post(`https://loja.buyphone.com.br/api/confirm-email`, data)
      .then((res) => {
        if (res.data.message == 'E-mail validado com sucesso.') {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } w-full lg:w-1/4 bg-[#FECACA] text-[#484752] h-auto items-center shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-auto w-10"
                      src="/success.webp"
                      alt="success img"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-xs font-medium text-green-500">
                      Parabéns, seu e-mail foi validado com sucesso!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
          setTimeout(() => {
            localStorage.clear()
            router.push('/terms')
          }, 2000)
        } else {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } w-full lg:w-1/4 bg-[#FECACA] text-[#484752] h-auto items-center shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-auto w-10"
                      src="/error.webp"
                      alt="Error img"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-xs font-medium text-red-900">
                      Verifique o alerta abaixo e corrija:
                    </p>
                    <p className="mt-1 text-[11px] text-red-900 opacity-70">
                      {res.data.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      })
  }

  return (
    <>
      <Progress value="90" />
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
      <Watch />

      <div className="flex gap-2 justify-center mt-4">
        {inputRefsArray.map((ref, index) => {
          return (
            <input
              ref={ref}
              type="tel"
              className="border border-Loja rounded-md w-16 h-16 text-center text-2xl text-Loja"
              id={`box${index}-1`}
              onChange={(e) => {
                const { value } = e.target
                setLetters((letters) =>
                  letters.map((letter, letterIndex) =>
                    letterIndex === index ? value : letter
                  )
                )
              }}
              onClick={(e) => {
                setCurrentIndex(index)
                e.target.select()
              }}
              value={letters[index]}
              maxLength={1}
            />
          )
        })}
      </div>
      <button
        onClick={handleClick}
        className="flex mt-[1.5rem] justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
        type="submit"
      >
        FINALIZAR CADASTRO
      </button>
    </>
  )
}
