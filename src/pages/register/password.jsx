import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from '../../components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useLocalStorage } from '../../utils/useLocalStorage'
import toast from 'react-hot-toast'
import Progress from '../../components/Progress'

export default function password() {
  const router = useRouter()
  const [password] = useLocalStorage('password', '')

  const formik = useFormik({
    initialValues: {
      password: password,
      changepassword: password,
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .min(8, 'Digite uma senha maior!')
        .required('Campo senha obrigatório!'),
      changepassword: yup
        .string()
        .required('Campo para confirmar senha obrigatório!')
        .when('password', {
          is: (val) => (val && val.length > 0 ? true : false),
          then: yup
            .string()
            .oneOf([yup.ref('password')], 'Senhas não são iguais!'),
        }),
    }),
    onSubmit: (values) => {
      localStorage.setItem('password', JSON.stringify(values.password))

      const data_americana = localStorage
        .getItem('birthdate')
        .split('/')
        .reverse()
        .join('-')
        .replace('"', '')
        .replace('"', '')

      const data = {
        password: localStorage
          .getItem('password')
          .replace('"', '')
          .replace('"', ''),
        name: localStorage.getItem('name').replace('"', '').replace('"', ''),
        document: localStorage
          .getItem('document')
          .replace('"', '')
          .replace('"', ''),
        mobile_phone: localStorage
          .getItem('mobile_phone')
          .replace('"', '')
          .replace('"', '')
          .replace(' ', ''),
        birthdate: data_americana,
        email: localStorage.getItem('email').replace('"', '').replace('"', ''),
        type: localStorage.getItem('type').replace('"', '').replace('"', ''),
      }

      axios
        .post(`https://loja.buyphone.com.br/api/register`, data)
        .then((res) => {
          router.push('/register/confirm')
        })
        .catch((error) => {
          var Error = error.response.data.message
            .split('document')
            .join('CPF')
            .split('mobile phone')
            .join('celular')
            .split('birthdate')
            .join('data de aniversário')
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
                    <p className="text-xs font-medium text-gray-900">
                      Verifique o alerta abaixo e corrija:
                    </p>
                    <p className="mt-1 text-[11px] text-gray-900 opacity-70">
                      {Error}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        })
    },
  })

  return (
    <>
      <Progress value="70" />

      <form className="grid gap-8" onSubmit={formik.handleSubmit}>
        <h1 className="mt-8 text-black text-xl font-semibold">
          Vamos criar uma senha!
        </h1>
        <div className="grid gap-3">
          <TextField
            label="Senha"
            fullWidth
            variant="outlined"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <TextField
            label="Confirme sua senha"
            fullWidth
            variant="outlined"
            type="password"
            name="changepassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.changepassword}
          />
        </div>
        {(formik.touched.password && formik.errors.password) ||
        (formik.touched.changepassword && formik.errors.changepassword) ? (
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
            <span className="pl-2"> {formik.errors.password}</span>
            <span className="pl-2"> {formik.errors.changepassword}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
