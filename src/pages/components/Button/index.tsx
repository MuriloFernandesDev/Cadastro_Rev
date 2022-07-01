import Link from 'next/link'
import React from 'react'

export default function Button() {
  return (
    <>
      <button
        className="flex mt-[1.5rem] justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
        type="submit"
      >
        Próximo
      </button>
    </>
  )
}
