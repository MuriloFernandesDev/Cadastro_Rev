import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'

export default function RegCpf() {
    // var i = 0

    // function cont() {
    //     for (i = 0; i < 1; i++) {
    //         if (i < 1) {
    //             toast.error('erro')
    //         } else {
    //             console.log('error')
    //         }
    //     }
    // }

    const formik = useFormik({
        initialValues: {
            cpf: '',
        },
        validationSchema: yup.object({
            cpf: yup.string().required('O campo é obrigatório.'),
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
                    cpf: values,
                }),
                    localStorage.setItem(
                        'Lista_Cadastro',
                        JSON.stringify(Lista_Cadastro)
                    )
            }, 500)
            toast.success('CPF Resgistrado com sucesso')

            setTimeout(() => {
                window.location.href = '/RegEmail'
            }, 2000)
        },
    })

    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Qual seu CPF?
            </h1>
            <form onSubmit={formik.handleSubmit}>
                {/* <TextField
                    label="Seu Cpf: (Ex: 999.999.999-99)"
                    type="text"
                    name="cpf"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cpf}
                /> */}

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
