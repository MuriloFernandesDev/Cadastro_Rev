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
    router.push('/category')
  }

  const [selectedValue, setSelectedValue] = useState('a')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

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
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="3a5"
                control={<Radio color="secondary" />}
                label="De 3 a 5"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="5a10"
                control={<Radio color="secondary" />}
                label="De 5 a 10"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="10a30"
                control={<Radio color="secondary" />}
                label="De 10 a 30"
              />
              <FormControlLabel
                className="border rounded-md border-Loja mr-0"
                value="mais30"
                control={<Radio color="secondary" />}
                label="Mais de 30"
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
