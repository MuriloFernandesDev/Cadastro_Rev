import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState, useEffect, FormEvent } from 'react' //

export default function RegEmail() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email('Digite um e-mail válido!')
                .required('O campo é obrigatório.'),
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
                    email: values,
                }),
                    localStorage.setItem(
                        'Lista_Cadastro',
                        JSON.stringify(Lista_Cadastro)
                    )
            }, 500)
            toast.success('Email Registrado com sucesso')

            setTimeout(() => {
                window.location.href = '/RegCelular'
            }, 2000)
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1 className="pb-5 text-black text-xl font-semibold">
                    Qual seu email?
                </h1>

                <TextField
                    label="Seu Email: (Ex: BuyPhone@gmail.com)"
                    type="text"
                    name="email"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />

                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-700 ml-2">
                        {formik.errors.email}
                    </div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
