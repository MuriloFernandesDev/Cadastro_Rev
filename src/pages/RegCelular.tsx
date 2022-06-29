import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/router'
import test from 'node:test'
import { TextSnippetRounded } from '@mui/icons-material'

export default function RegCelular() {
    const formik = useFormik({
        initialValues: {
            celular: '',
        },
        validationSchema: yup.object({
            celular: yup
                .string()
                .required('O campo é obrigatório.')
                .test('len', 'Insira um Celular válido!', (val = '') => {
                    const val_length_without_dashes = val.replace(
                        /-|_/g,
                        ''
                    ).length
                    return val_length_without_dashes === 14
                }),
        }),
        onSubmit: (values) => {
            localStorage.setItem(
                'celular',
                JSON.stringify(values.celular).replace('"', '').replace('"', '')
            )

            window.location.href = '/RegSenha'
        },
    })

    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Qual seu Celular?
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <InputMask
                    onChange={formik.handleChange}
                    mask="(99) 99999-9999"
                    onBlur={formik.handleBlur}
                    value={formik.values.celular}
                    name="celular"
                    type="number"
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
                    <div className="text-red-700 ml-2">
                        {formik.errors.celular}
                    </div>
                ) : null}

                <Button />
            </form>
        </>
    )
}
