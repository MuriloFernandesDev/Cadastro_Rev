import * as yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../../utils/useLocalStorage'
import InputMask from 'react-input-mask'
import Progress from '../../components/Progress'
import axios from 'axios'
import toast from 'react-hot-toast'
import Button from '../../components/Button'

export default function cnpj() {
  const [cnpj] = useLocalStorage('@BuyPhone_cnpj', '')
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      cnpj: cnpj,
    },
    validationSchema: yup.object({
      cnpj: yup.string().required('O campo é obrigatório.'),
    }),
    onSubmit: async (values) => {
      const result = values.cnpj
        .replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .replace('/', '')

      const res = await axios.get(
        `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${result}/json`
      )

      if (res.data.STATUS == 'ATIVA') {
        const { BAIRRO, CEP, LOGRADOURO, MUNICIPIO, NUMERO, UF } = res.data
        localStorage.setItem('@BuyPhone_cnpj', JSON.stringify(values.cnpj))
        localStorage.setItem('@BuyPhone_address', JSON.stringify(LOGRADOURO))
        localStorage.setItem('@BuyPhone_city', JSON.stringify(MUNICIPIO))
        localStorage.setItem('@BuyPhone_state', JSON.stringify(UF))
        localStorage.setItem('@BuyPhone_district', JSON.stringify(BAIRRO))
        localStorage.setItem('@BuyPhone_number', JSON.stringify(NUMERO))
        localStorage.setItem('@BuyPhone_postal', JSON.stringify(CEP))
        router.push('/business-register/companyname')
      }
      if (res.data.STATUS == 'BAIXADA') {
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
                    Esse CNPJ não está ativo na receita federal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      if (res.data.error != undefined) {
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
                    Digite um CNPJ existente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
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
