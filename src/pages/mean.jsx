import Image from 'next/image'
import Progress from './components/Progress'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from './components/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import toast from 'react-hot-toast'

//criando paleta de tema
const theme = createTheme({
  palette: {
    secondary: {
      main: '#201942',
    },
  },
})

export default function mean() {
  const router = useRouter()

  function submit() {
    //se nao for checked tratar erro
    var valor = document.querySelector('input[name="radiogroup"]:checked')
    if (valor == null) {
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
                  Selecione algum campo.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))
    } else {
      var value = document.querySelector(
        'input[name="radiogroup"]:checked'
      ).value
      localStorage.setItem('mean', JSON.stringify(value))
      router.push('/category')
    }
  }

  return (
    <>
      <Progress value="70" />
      <div className="grid gap-8 mt-8">
        <h1 className="text-black text-xl font-semibold">
          Em média quantos iPhones você vende por mês?
        </h1>

        <FormControl>
          <ThemeProvider theme={theme}>
            <RadioGroup
              className="grid gap-3"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="1a3"
                control={<Radio color="secondary" />}
                label="De 1 a 3"
                name="radiogroup"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="3a5"
                control={<Radio color="secondary" />}
                label="De 3 a 5"
                name="radiogroup"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="5a10"
                control={<Radio color="secondary" />}
                label="De 5 a 10"
                name="radiogroup"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="10a30"
                control={<Radio color="secondary" />}
                label="De 10 a 30"
                name="radiogroup"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="mais30"
                control={<Radio color="secondary" />}
                label="Mais de 30"
                name="radiogroup"
              />
            </RadioGroup>
          </ThemeProvider>
        </FormControl>

        <div onClick={submit}>
          <Button />
        </div>
      </div>
    </>
  )
}
