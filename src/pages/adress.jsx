import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'

export default function adress() {
  const [adress] = useLocalStorage('adress', '')
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      adress: adress,
    },
    validationSchema: yup.object({
      adress: yup
        .string()
        .required('Campo nome é Obrigatório!')
        .min(3, 'Digite seu nome completo!')
        .max(40, 'Nome muito longo!'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('adress', JSON.stringify(values.adress))
      router.push('/number')
    },
  })

  return (
    <>
      <h1 className="pb-5 text-black text-xl font-semibold">
        Qual o nome da rua?
      </h1>
      <form className="gap-3 h-auto" onSubmit={formik.handleSubmit}>
        <TextField
          label="Rua"
          type="text"
          name="adress"
          fullWidth
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.adress}
        />
        <h2 className="text-Loja opacity-50 text-sm mt-2">
          Na próxima tela pediremos o número e complemento
        </h2>
        {formik.touched.adress && formik.errors.adress ? (
          <div className="badge badge-warning badge-lg bg-opacity-80 text-xs mt-[1.5rem]">
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
            <span className="pl-2"> {formik.errors.adress}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
