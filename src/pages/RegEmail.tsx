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
            localStorage.setItem(
                'email',
                JSON.stringify(values.email).replace('"', '').replace('"', '')
            )

            window.location.href = '/RegCelular'
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
