import Timer from './Timer'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useLocalStorage } from '../utils/useLocalStorage'

// const numOfFields = 4

// const useSSNFields = () => {
//   const [ssnValues, setValue] = useState({
//     ssn1: '',
//     ssn2: '',
//     ssn3: '',
//     ssn4: '',
//   })

//   return {
//     handleChange: (e) => {
//       const { maxLength, value, name } = e.target
//       const [fieldName, fieldIndex] = name.split('-')

//       // Check if they hit the max character length
//       if (value.length >= maxLength) {
//         // Check if it's not the last input field
//         if (parseInt(fieldIndex, 10) < 4) {
//           // Get the next input field
//           const nextSibling = document.querySelector(
//             `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
//           )

//           // If found, focus the next field
//           if (nextSibling !== null) {
//             nextSibling.focus()
//           }
//         }
//       }

//       setValue({
//         ...value,
//         [`ssn${fieldIndex}`]: value,
//       })
//     },
//     onSubmit: (values) => {
//       console.log(values)
//     },
//   }
// }

export default function confirmation() {
  const [email] = useLocalStorage('email', '')
  const numerOfInputs = 4

  const [inputRefsArray] = useState(() => Array.from({ length: numerOfInputs }))

  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      ssn1: '',
      ssn2: '',
      ssn3: '',
      ssn4: '',
    },
    validationSchema: yup.object({
      code: yup.string().required('O campo é obrigatório.'),
    }),
    onSubmit: (values) => {
      //criar teste para verificar o codigo
      // localStorage.clear()
      console.log(values.code)

      const { maxLength, value, name } = e.target
      const [fieldName, fieldIndex] = name.split('-')

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 4) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          )

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus()
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      })

      // router.push('/terms')
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1 className="font-semibold text-sm text-black opacity-50">
          Falta pouco
        </h1>
        <h2 className="pb-5 text-black text-xl font-semibold">
          Confirmação de e-mail
        </h2>
        <h3 className="font-medium text-sm text-black opacity-50">
          Informe o código enviado para o e-mail:
        </h3>
        <p className="font-medium pb-5 text-sm text-black opacity-50">
          {email}
        </p>
        <Timer />
        <div className="flex justify-center gap-2">
          <input
            type="text"
            className="border flex text-center text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
            name="ssn-1"
            maxLength={1}
            value={formik.values.ssn1}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            className="border flex text-center text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
            name="ssn-2"
            maxLength={1}
            value={formik.values.ssn1}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            className="border flex text-center text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
            name="ssn-3"
            maxLength={1}
            value={formik.values.ssn3}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            className="border flex text-center text-black p-2 border-Loja rounded-lg w-10 h-10 z-10"
            name="ssn-4"
            maxLength={1}
            value={formik.values.ssn4}
            onChange={formik.handleChange}
          />
        </div>
        <Button />
      </form>
    </>
  )
}
