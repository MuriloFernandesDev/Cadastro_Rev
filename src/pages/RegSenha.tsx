import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import * as Yup from 'yup'
import { Formik } from 'formik'
import toast from 'react-hot-toast'

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

export default function RegSenha() {
    return (
        <Formik
            initialValues={{
                password: '',
                changepassword: '',
            }}
            validationSchema={Schema}
            onSubmit={(values) => {
                setTimeout(() => {
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
                }, 500)
                toast.success('Senha registrada com sucesso!')

                setTimeout(() => {
                    window.location.href = '/RegConfirmation'
                }, 2000)
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
