import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'

export default function RegCpf() {
    const formik = useFormik({
        initialValues: {
            cpf: '',
        },
        validationSchema: yup.object({
            cpf: yup.string().required('O campo é obrigatório.'),
        }),
        onSubmit: (values) => {
            localStorage.setItem(
                'cpf',
                JSON.stringify(values.cpf).replace('"', '').replace('"', '')
            )

            window.location.href = '/RegEmail'
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
                    onBlur={formik.handleBlur}
                    value={formik.values.cpf}
                    mask="999.999.999-99"
                    name="cpf"
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
                    <div className="text-red-700 ml-2">{formik.errors.cpf}</div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
