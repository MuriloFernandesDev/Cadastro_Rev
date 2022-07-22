import * as yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../../utils/useLocalStorage'
import InputMask from 'react-input-mask'
import Progress from '../../components/Progress'
import Button from '../../components/Button'

export default function birth() {
  const [birth] = useLocalStorage('birthdate', '')
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      birth: birth,
    },
    validationSchema: yup.object({
      birth: yup.string().required('O campo é obrigatório.'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('birthdate', JSON.stringify(values.birth))
      router.push('/register/cpf')
    },
  })

  return (
    <>
      <Progress value="30" />

      <form className="grid gap-8" onSubmit={formik.handleSubmit}>
        <h1 className="text-black text-xl font-semibold mt-8">
          Qual sua data de nascimento?
        </h1>
        <InputMask
          onChange={formik.handleChange}
          mask="99/99/9999"
          onBlur={formik.handleBlur}
          value={formik.values.birth}
          name="birth"
          type="number"
        >
          {() => (
            <TextField
              fullWidth
              onBlur={formik.handleBlur}
              value={formik.values.birth}
              name="birth"
              label="Data de nascimento"
              variant="outlined"
            />
          )}
        </InputMask>

        {formik.touched.birth && formik.errors.birth ? (
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
            <span className="pl-2"> {formik.errors.birth}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
