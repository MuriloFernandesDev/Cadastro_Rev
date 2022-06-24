import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
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
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    Nome
                </label>

                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    id="nome"
                    name="nome"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nome}
                />
                {formik.touched.nome && formik.errors.nome ? (
                    <div>{formik.errors.nome}</div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
