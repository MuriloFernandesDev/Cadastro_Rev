import Timer from './Timer'
import * as yup from 'yup'
import { replace, useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import Progress from './components/Progress'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function confirmation() {
  const [email] = useLocalStorage('email', '')
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: yup.object({
      code: yup
        .string()
        .required('O campo é obrigatório.')
        .min(4, 'O campo precisa conter 4 caracteres!')
        .max(4, 'O campo precisa conter 4 caracteres!'),
    }),
    onSubmit: (values) => {
      const data = {
        email: localStorage.getItem('email').replace('"', '').replace('"', ''),
        code: values.code.replace('"', '').replace('"', ''),
      }
      axios
        .post(`https://loja.buyphone.com.br/api/confirm-email`, data)
        .then((res) => {
          if (res.data.message == 'E-mail validado com sucesso.') {
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
                        src="/success.webp"
                        alt="success img"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-xs font-medium text-green-500">
                        Parabéns, seu e-mail foi validado com sucesso!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
            setTimeout(() => {
              router.push('/conclusion')
            }, 3000)
          } else {
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
                        Verifique o alerta abaixo e corrija:
                      </p>
                      <p className="mt-1 text-[11px] text-red-900 opacity-70">
                        {res.data.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        })
    },
  })

  return (
    <>
      <Progress value="90" />
      <h1 className="font-semibold text-sm text-black opacity-50">
        Falta pouco
      </h1>
      <h2 className="pb-5 text-black text-xl font-semibold">
        Confirmação de e-mail
      </h2>
      <h3 className="font-medium text-sm text-black opacity-50">
        Informe o código enviado para o e-mail:
      </h3>
      <p className="font-medium pb-5 text-sm text-black opacity-50">dsa</p>
      <Timer />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center mt-2">
          <TextField
            type="number"
            name="code"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.code}
            className="w-[8rem]"
            inputProps={{
              style: { fontSize: 40 },
              maxLength: 4,
            }}
            InputLabelProps={{ style: { fontSize: 40 } }}
          />
        </div>
        {formik.touched.code && formik.errors.code ? (
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
            <span className="pl-2"> {formik.errors.code}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
