import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState, useEffect, FormEvent } from 'react' //

export default function RegName() {
    const formik = useFormik({
        initialValues: {
            nome: '',
        },
        validationSchema: yup.object({
            nome: yup.string().required('O campo é obrigatório.'),
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
                    nome: values,
                }),
                    localStorage.setItem(
                        'Lista_Cadastro',
                        JSON.stringify(Lista_Cadastro)
                    )
                // console.log(JSON.stringify(values, null, 2))
                // actions.setSubmitting(false)
            }, 500)
            toast.success('Nome Resgistrado com sucesso')
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
                    label="Seu nome:  (Ex: BuyPhone da silva)"
                    type="email"
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
