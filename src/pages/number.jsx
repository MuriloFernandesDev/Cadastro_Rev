import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import Progress from './components/Progress'

export default function number() {
  const [number] = useLocalStorage('number', '')
  const [adress] = useLocalStorage('adress', '')
  const [state] = useLocalStorage('state', '') ?? ''
  const [city] = useLocalStorage('city', '')
  const [district] = useLocalStorage('district', '')
  const [complemento] = useLocalStorage('complemento', '')
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      number: number ?? '',
      district: district ?? '',
      complemento: complemento ?? '',
    },
    validationSchema: yup.object({
      number: yup
        .string()
        .required('Campo número é Obrigatório!')
        .min(1, 'Número muito curto!')
        .max(5, 'Número muito longo!'),
      district: yup
        .string()
        .required('Campo bairro é Obrigatório!')
        .min(5, 'Bairro muito curto!')
        .max(40, 'Bairro muito longo!'),
      complemento: yup.string().max(30, 'Complemento muito longo!'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('number', JSON.stringify(values.number))
      localStorage.setItem('district', JSON.stringify(values.district))
      localStorage.setItem('complemento', JSON.stringify(values.complemento))
      router.push('/confirmadress')
    },
  })

  return (
    <>
      <Progress value="50" />
      <h1 className="text-black text-xl font-semibold">{adress}</h1>
      <h2 className="text-Loja opacity-50 text-sm pb-4">
        {city}, {state}
      </h2>
      <form className="grid gap-8 mt-8" onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            label="Bairro"
            type="text"
            name="district"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.district}
          />
          <div className="p-2"></div>
          <TextField
            label="Número (casa, condomínio, km, etc..)"
            type="text"
            name="number"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
          <div className="p-2"></div>
          <TextField
            label="Complemento (apto, bloco, sala, etc..) - opcional"
            type="text"
            name="complemento"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.complemento}
          />
        </div>
        {(formik.touched.number && formik.errors.number) ||
        (formik.touched.district && formik.errors.district) ||
        (formik.touched.complemento && formik.errors.complemento) ? (
          <div className="badge badge-warning badge-lg bg-opacity-80 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="pl-2"> {formik.errors.number}</span>
            <span className="pl-2"> {formik.errors.district}</span>
            <span className="pl-2"> {formik.errors.complemento}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
