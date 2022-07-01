import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useLocalStorage } from './useLocalStorage'

export default function RegSenha() {
    const router = useRouter()
    const password = useLocalStorage('password', '')

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
                    is: (val: string | any[]) =>
                        val && val.length > 0 ? true : false,
                    then: yup
                        .string()
                        .oneOf([yup.ref('password')], 'Senhas não são iguais!'),
                }),
        }),
        onSubmit: (values) => {
            localStorage.setItem('password', JSON.stringify(values.password))
            const Data1 = localStorage.getItem('senha')
            const Data2 = localStorage.getItem('name')
            const Data3 = localStorage.getItem('cpf')
            const Data4 = localStorage.getItem('celular')
            const Data5 = localStorage.getItem('email')

            const post = () => {
                const data = {
                    senha: localStorage.getItem('senha'),
                    name: localStorage.getItem('name'),
                    cpf: localStorage.getItem('cpf'),
                    celular: localStorage.getItem('celular'),
                    email: localStorage.getItem('email'),
                }

                axios.post('api', data)
                // .then((response) => renderOutput(response))
            }

            console.log(Data1, Data2, Data3, Data4, Data5)

            //enviar dados para o pablo
            // localStorage.clear()
            router.push('/RegConfirmation')
        },
    })

    return (
        <>
            <h1 className="font-semibold text-sm text-black opacity-50">
                Vamos começar
            </h1>

            <h2 className="pb-5 text-black text-xl font-semibold">
                Qual seu nome completo?
            </h2>

            <form className="gap-3 h-auto" onSubmit={formik.handleSubmit}>
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
                <div className="p-2"></div>
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

                {(formik.touched.password && formik.errors.password) ||
                (formik.touched.changepassword &&
                    formik.errors.changepassword) ? (
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
                        <span className="pl-2">
                            {' '}
                            {formik.errors.changepassword}
                        </span>
                    </div>
                ) : null}

                <Button />
            </form>
        </>
    )
}
