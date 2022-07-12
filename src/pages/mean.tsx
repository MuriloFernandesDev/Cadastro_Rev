import Image from 'next/image'
import Progress from './components/Progress'
import { useState } from 'react'
import { Router, useRouter } from 'next/router'
import Button from './components/Button'

export default function mean() {
  const router = useRouter()

  function submit() {
    router.push('/category')
  }

  return (
    <>
      <Progress value="70" />
      <div className="grid gap-8 mt-8">
        <h1 className="text-black text-xl font-semibold">
          Em média quantos iPhones você vende por mês?
        </h1>
        <div className="grid gap-3">
          <div className="form-control flex-row border rounded-md border-Loja">
            <label className="label cursor-pointer flex w-full justify-start gap-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="label-text text-lg font-medium">De 1 a 3</span>
            </label>
          </div>
          <div className="form-control flex-row border rounded-md border-Loja">
            <label className="label cursor-pointer flex w-full justify-start gap-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="label-text text-lg font-medium">De 3 a 5</span>
            </label>
          </div>
          <div className="form-control flex-row border rounded-md border-Loja">
            <label className="label cursor-pointer flex w-full justify-start gap-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="label-text text-lg font-medium">De 5 a 10</span>
            </label>
          </div>
          <div className="form-control flex-row border rounded-md border-Loja">
            <label className="label cursor-pointer flex w-full justify-start gap-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="label-text text-lg font-medium">De 10 a 30</span>
            </label>
          </div>
          <div className="form-control flex-row border rounded-md border-Loja">
            <label className="label cursor-pointer flex w-full justify-start gap-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="label-text text-lg font-medium">Mais de 30</span>
            </label>
          </div>
        </div>
        <div onClick={submit}>
          <Button />
        </div>
      </div>
    </>
  )
}
