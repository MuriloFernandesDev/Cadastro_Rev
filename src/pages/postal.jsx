import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from '../components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import InputMask from 'react-input-mask'
import ApiCep from '../service/getCep'
import Progress from '../components/Progress'

export default function postal() {
  const [postal] = useLocalStorage('postal', '')

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      postal: postal,
    },
    validationSchema: yup.object({
      postal: yup.string().required('Campo CEP obrigatório!'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('postal', JSON.stringify(values.postal))
      const result = values.postal.replace('-', '')
      // Chamando api e salvando localstorage
      if (postal == result) {
        setTimeout(() => {
          router.push('/address')
        }, 1000)
      } else {
        ApiCep(result)
        setTimeout(() => {
          router.push('/address')
        }, 1000)
      }
    },
  })

  return (
    <>
      <Progress value="30" />
      <form className="grid gap-8 mt-8" onSubmit={formik.handleSubmit}>
        <h1 className="pb-5 text-black text-xl font-semibold">
          Pode nos informar seu CEP?
        </h1>
        <InputMask
          onChange={formik.handleChange}
          mask="99999-999"
          onBlur={formik.handleBlur}
          value={formik.values.postal}
          name="postal"
          type="tel"
        >
          {() => (
            <TextField
              fullWidth
              onBlur={formik.handleBlur}
              value={formik.values.postal}
              name="postal"
              label="CEP"
              variant="outlined"
            />
          )}
        </InputMask>
        {formik.touched.postal && formik.errors.postal ? (
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
            <span className="pl-2"> {formik.errors.postal}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
