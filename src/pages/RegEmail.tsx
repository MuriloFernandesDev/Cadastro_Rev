import Link from 'next/link'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'

import React, { useState, useEffect, FormEvent } from 'react' //

export default function RegEmail() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: yup.object({
            email: yup.string().required('O campo é obrigatório.'),
        }),
        onSubmit: (values) => {
            toast.success('Nome Resgistrado com sucesso')
            console.log(JSON.stringify(values))
        },
    })

    return (
        <>
            <h1 className="pb-5 text-black text-xl font-semibold">
                Qual seu email?
            </h1>
            {/* <form action="InsertEmail" onSubmit={HandleSubmit}>
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    E-mail
                </label>
                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />

                <button
                    className="flex justify-center font-bold uppercase w-full text-white text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
                    type="submit"
                    disabled={loading}
                >
                    Próximo
                </button>
            </form> */}

            <form onSubmit={formik.handleSubmit}>
                <label className="absolute text-Loja bg-white -mt-3 ml-7 h-5 pl-2 pr-2">
                    E-mail
                </label>
                <input
                    className="border text-black p-2 border-Loja rounded-lg w-full h-10 z-10"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <button
                    className="flex justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
                    type="submit"
                >
                    Próximo
                </button>
            </form>
        </>
    )
}
