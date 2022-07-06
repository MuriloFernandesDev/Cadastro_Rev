import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import Image from 'next/image'
import MapImg from '../../public/undraw.svg'
import EditImg from '../../public/Create.svg'
import Progress from './components/Progress'

export default function confirmadress() {
  const [email] = useLocalStorage('email', '')
  const [district] = useLocalStorage('district', '')
  const [city] = useLocalStorage('city', '')
  const [state] = useLocalStorage('state', '')
  const [adress] = useLocalStorage('adress', '')
  const [number] = useLocalStorage('number', '')
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
      <Progress value="90" />
      <form onSubmit={formik.handleSubmit}>
        <div className="w-64 h-auto mx-auto">
          <Image src={MapImg} layout="responsive"></Image>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="pb-2 mt-6 text-black text-xl font-semibold">
              {adress}, {number}
            </h1>
            <h2 className="text-Loja opacity-50 text-sm">
              {district}, {city} - {state}
            </h2>
          </div>
          <div className="w-[24px] h-[24px] hover:opacity-50 duration-300">
            <a href="#abrirtelaedicaoinformacoes">
              <Image src={EditImg} layout="responsive"></Image>
            </a>
          </div>
        </div>

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
