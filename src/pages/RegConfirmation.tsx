import Button from './components/Button'
import Timer from './Timer'
import { useState, createRef, useEffect, useRef } from 'react'

export default function RegConfirmation() {
    // const lineIndex = props.index
    const numerOfInputs = 4

    const [inputRefsArray] = useState(() =>
        Array.from({ length: numerOfInputs }, () => createRef())
    )
    const [currentIndex, setCurrentIndex] = useState(0)

    const [letters, setLetters] = useState(() =>
        Array.from({ length: numerOfInputs }, () => '')
    )

    const handleKeyPress = () => {
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

    return (
        <>
            <h1 className="font-semibold text-sm text-black opacity-50">
                Falta pouco
            </h1>

            <h2 className="pb-5 text-black text-xl font-semibold">
                Confirmação de e-mail
            </h2>
            <h3 className="font-semibold pb-5 text-sm text-black opacity-50">
                Informe o código enviado para o e-mail:
            </h3>

            <Timer />

            <div className="flex gap-3 justify-center p-2">
                {inputRefsArray.map((ref, index) => {
                    return (
                        <input
                            className="border text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
                            ref={ref}
                            type="text"
                            id={`box${index}-1`}
                            onChange={(e) => {
                                const { value } = e.target
                                setLetters((letters) =>
                                    letters.map((letter, letterIndex) =>
                                        letterIndex === index ? value : letter
                                    )
                                )
                            }}
                            value={letters[index]}
                            max={1}
                            maxlength={1}
                        />
                    )
                })}
            </div>

            <Button />
        </>
    )
}
