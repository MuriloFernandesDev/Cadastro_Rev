import { Timer } from '@mui/icons-material'
import React from 'react'
import { useState, useEffect } from 'react'

const Watch = (props: any) => {
  const { initialMinute = 5, initialSeconds = 0 } = props
  const [minutes, setMinutes] = useState(initialMinute)
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <h1 className="flex justify-center">
          <Timer />
          Tempo Expirado - Envie Novamente
        </h1>
      ) : (
        <h1 className="flex justify-center text-black font-normal">
          {' '}
          <Timer />
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  )
}

export default Watch
