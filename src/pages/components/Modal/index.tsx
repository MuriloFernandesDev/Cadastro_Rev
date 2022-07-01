import Link from 'next/link'
import React from 'react'
import { TextField } from '@mui/material'

export default function Componente() {
  return (
    <>
      <div className="h-[1px] bg-Loja mt-[0.85rem] opacity-50 w-5/6 absolute"></div>
      <h1 className="text-lg font-bold z-10 pb-2 flex justify-center uppercase w-24 bg-white">
        Entrar
      </h1>
      <TextField
        label="Email"
        type="text"
        name="email"
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Senha"
        type="password"
        name="email"
        fullWidth
        variant="outlined"
      />
      <button
        className="flex mt-[1.5rem] p-2 justify-center mx-auto font-medium uppercase w-full text-white text-xl py-3 rounded-md hover:scale-105 ease-in-out duration-300 bg-Loja"
        type="submit"
      >
        Entrar
      </button>
      <a className="font-semibold" href="">
        Esqueci minha senha{' '}
      </a>
    </>
  )
}
