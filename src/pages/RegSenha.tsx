import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import * as Yup from 'yup'
import { Formik } from 'formik'

const Schema = Yup.object().shape({
    password: Yup.string().required('This field is required'),
    changepassword: Yup.string().when('password', {
        is: (val: string | any[]) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Senhas não são iguais!'
        ),
    }),
})
const ISSERVER = typeof window === 'undefined'
if (!ISSERVER) localStorage.getItem('password')

function teste() {
    if (ISSERVER !== undefined) {
        ISSERVER
    }
    return ''
}
export default function RegSenha() {
    return (
        <Formik
            initialValues={{
                password: teste() ?? '',
                changepassword: teste() ?? '',
            }}
            validationSchema={Schema}
            onSubmit={(values) => {
                localStorage.setItem(
                    'password',
                    JSON.stringify(values.password)
                        .replace('"', '')
                        .replace('"', '')
                )

                const Data1 = localStorage.getItem('senha')
                const Data2 = localStorage.getItem('name')
                const Data3 = localStorage.getItem('cpf')
                const Data4 = localStorage.getItem('celular')
                const Data5 = localStorage.getItem('email')
                console.log(Data1, Data2, Data3, Data4, Data5)

                //enviar dados para o pablo
                // localStorage.clear()

                window.location.href = '/RegConfirmation'
            }}
        >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                return (
                    <>
                        <h1 className="pb-5 text-black text-xl font-semibold">
                            Vamos criar uma senha para o seu acesso?
                        </h1>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Senha"
                                fullWidth
                                variant="outlined"
                                type="password"
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                            />
                            <div className="p-2"></div>
                            <TextField
                                label="Confirme sua senha"
                                fullWidth
                                variant="outlined"
                                type="password"
                                name="changepassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.changepassword}
                            />
                            <span className="error" style={{ color: 'red' }}>
                                {errors.changepassword}
                            </span>
                            <Button />
                        </form>
                    </>
                )
            }}
        </Formik>
    )
}
