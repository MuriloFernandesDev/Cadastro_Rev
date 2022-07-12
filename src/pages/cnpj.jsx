import * as yup from 'yup'
import { replace, useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import InputMask from 'react-input-mask'
import Progress from './components/Progress'
import ApiCnpj from '../utils/getCnpj'
import axios from 'axios'

export default function cnpj() {
  const [cnpj] = useLocalStorage('cnpj', '')
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      cnpj: cnpj,
    },
    validationSchema: yup.object({
      cnpj: yup.string().required('O campo é obrigatório.'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('cnpj', JSON.stringify(values.cnpj))

      const result = cnpj
        .replace('.', '')
        .replace('.', '')
        .replace('/', '')
        .replace('-', '')

      // Chamando api e salvando localstorage
      ApiCnpj(result)
      // router.push('/companyname')
    },
  })

  return (
    <>
      <Progress value="10" />
      <form className="grid gap-8 mt-8" onSubmit={formik.handleSubmit}>
        <h1 className="pb-5 text-black text-xl font-semibold">
          Qual o CNPJ da sua empresa?
        </h1>
        <div>
          <InputMask
            onChange={formik.handleChange}
            mask="99.999.999/9999-99"
            onBlur={formik.handleBlur}
            value={formik.values.cnpj}
            name="cpf"
            type="text"
          >
            {() => (
              <TextField
                fullWidth
                onBlur={formik.handleBlur}
                value={formik.values.cnpj}
                name="cnpj"
                label="CNPJ"
                variant="outlined"
              />
            )}
          </InputMask>
          <h2 className="text-Loja opacity-50 text-sm mt-2">
            Digite apenas os números
          </h2>
        </div>

        {formik.touched.cnpj && formik.errors.cnpj ? (
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
            <span className="pl-2"> {formik.errors.cnpj}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
