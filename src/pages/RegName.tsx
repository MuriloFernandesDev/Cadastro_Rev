import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'

export default function RegName() {
    const formik = useFormik({
        initialValues: {
            nome: '',
        },
        validationSchema: yup.object({
            nome: yup.string().required('O campo é obrigatório.'),
        }),
        onSubmit: (values) => {
            var Lista_Cadastro = JSON.parse(
                localStorage.getItem('Lista_Cadastro') || '[]'
            )
            Lista_Cadastro.push({
                nome: values,
            }),
                localStorage.setItem(
                    'Lista_Cadastro',
                    JSON.stringify(Lista_Cadastro)
                )

            setTimeout(() => {
                toast.success('Nome Resgistrado com sucesso')
            }, 2000)

            setTimeout(() => {
                window.location.href = '/RegCpf'
            }, 2000)
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
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    label="Nome"
                    type="text"
                    name="nome"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nome}
                />

                {formik.touched.nome && formik.errors.nome ? (
                    <div className="text-red-700 ml-2">
                        {formik.errors.nome}
                    </div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
