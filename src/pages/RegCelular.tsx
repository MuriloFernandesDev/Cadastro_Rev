import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'

export default function RegCelular() {
    const formik = useFormik({
        initialValues: {
            Celular: '',
        },
        validationSchema: yup.object({
            Celular: yup
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
            setTimeout(() => {
                var Lista_Cadastro = JSON.parse(
                    localStorage.getItem('Lista_Cadastro') || '[]'
                )
                // bool val = false;
                // for(int i = 0; i < lista.length; i++){
                //     if(lista[i] = values){
                //         textbox.sdfa("Número já cadastrado");
                //         val = true;
                //     }
                // }
                // if(val = false){

                // }LOGICA PARA VERIFICAR SE CADASTRO JÁ EXISTE NA LISTA

                Lista_Cadastro.push({
                    Celular: values,
                }),
                    localStorage.setItem(
                        'Lista_Cadastro',
                        JSON.stringify(Lista_Cadastro)
                    )
            }, 500)
            toast.success('Celular Registrado com sucesso')
            setTimeout(() => {
                window.location.href = '/RegSenha'
            }, 2000)
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
                    value={formik.values.Celular}
                    name="cpf"
                    type="number"
                >
                    {() => (
                        <TextField
                            fullWidth
                            onBlur={formik.handleBlur}
                            value={formik.values.Celular}
                            name="Celular"
                            label="Celular"
                            variant="outlined"
                        />
                    )}
                </InputMask>

                {formik.touched.Celular && formik.errors.Celular ? (
                    <div className="text-red-700 ml-2">
                        {formik.errors.Celular}
                    </div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
