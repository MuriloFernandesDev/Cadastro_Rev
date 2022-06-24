import * as yup from 'yup'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import Button from './components/Button'

export default function RegCpf() {
    const formik = useFormik({
        initialValues: {
            cpf: '',
        },
        validationSchema: yup.object({
            cpf: yup
                .number()
                .required('O campo é obrigatório.')
                .positive('O campo deve ser positivo.'),
        }),
        onSubmit: (values) => {
            toast.success('Cpf Registrado com sucesso!')
            console.log(JSON.stringify(values))
        },
    })

    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Qual seu CPF?
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    Cpf
                </label>
                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    id="cpf"
                    maxLength={14}
                    name="cpf"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cpf}
                />
                {formik.touched.cpf && formik.errors.cpf ? (
                    <div>{formik.errors.cpf}</div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
