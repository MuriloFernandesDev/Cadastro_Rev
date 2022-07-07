import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import Progress from './components/Progress'

export default function email() {
  const [email] = useLocalStorage('email', '')
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: email,
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Digite um e-mail válido!')
        .required('O campo é obrigatório.'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('email', JSON.stringify(values.email))
      router.push('/phone')
    },
  })

  return (
    <>
      <Progress value="50" />
      <form onSubmit={formik.handleSubmit}>
        <h1 className="pb-5 text-black text-xl font-semibold">
          Qual seu email?
        </h1>
        <TextField
          label="Seu email"
          type="text"
          name="email"
          fullWidth
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
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
            <span className="pl-2"> {formik.errors.email}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
