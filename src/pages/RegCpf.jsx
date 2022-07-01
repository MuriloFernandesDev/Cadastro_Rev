import * as yup from 'yup'
import { replace, useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'
import InputMask from 'react-input-mask'

export default function RegCpf() {
    const cpf = useLocalStorage('cpf', '')
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            cpf: cpf,
        },
        validationSchema: yup.object({
            cpf: yup.string().required('O campo é obrigatório.'),
            // .transform((value) => value.replace(/[^\d]/g, ''))
            // .min(11, 'Digite um CPF!')
            // .max(11, 'Digite um CPF!'),
        }),
        onSubmit: (values) => {
            localStorage.setItem('cpf', JSON.stringify(values.cpf))
            router.push('/RegEmail')
        },
    })

    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Qual seu CPF?
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <InputMask
                    onChange={formik.handleChange}
                    mask="999.999.999-99"
                    onBlur={formik.handleBlur}
                    value={formik.values.cpf}
                    name="cpf"
                    type="number"
                >
                    {() => (
                        <TextField
                            fullWidth
                            onBlur={formik.handleBlur}
                            value={formik.values.cpf}
                            name="cpf"
                            label="CPF"
                            variant="outlined"
                        />
                    )}
                </InputMask>

                {formik.touched.cpf && formik.errors.cpf ? (
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
                        <span className="pl-2"> {formik.errors.cpf}</span>
                    </div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
