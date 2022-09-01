import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from '../../components/Button'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../../utils/useLocalStorage'
import Progress from '../../components/Progress'

export default function phone() {
  const router = useRouter()
  const [celular] = useLocalStorage('@BuyPhone_mobile_phone', '')
  const formik = useFormik({
    initialValues: {
      celular: celular,
    },
    validationSchema: yup.object({
      celular: yup.string('aa').required('O campo é obrigatório.'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('@BuyPhone_type', 1)
      localStorage.setItem(
        '@BuyPhone_mobile_phone',
        JSON.stringify(values.celular)
      )
      router.push('/register/password')
    },
  })

  return (
    <>
      <Progress value="60" />

      <form className="grid gap-8" onSubmit={formik.handleSubmit}>
        <h1 className="mt-8 text-black text-xl font-semibold">
          Qual seu Celular?
        </h1>
        <InputMask
          onChange={formik.handleChange}
          mask="+55(99) 99999-9999"
          onBlur={formik.handleBlur}
          value={formik.values.celular}
          name="celular"
          type="tel"
        >
          {() => (
            <TextField
              fullWidth
              onBlur={formik.handleBlur}
              value={formik.values.celular}
              name="celular"
              label="Celular"
              variant="outlined"
            />
          )}
        </InputMask>
        {formik.touched.celular && formik.errors.celular ? (
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
            <span className="pl-2"> {formik.errors.celular}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
