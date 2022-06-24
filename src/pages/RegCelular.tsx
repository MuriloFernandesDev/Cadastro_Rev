import React from 'react'
import { Formik } from 'formik'
import InputMask from 'react-input-mask'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import * as yup from 'yup'

let validateSchema = yup.object().shape({
    tel_no: yup
        .string()
        .test('len', 'Insira um telefone válido', (val = '') => {
            const val_length_without_dashes = val.replace(/-|_/g, '').length
            return val_length_without_dashes === 12 || 12
        })
        .required('Telefone é obrigatório'),
})

export default function RegCelular() {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Formik
                initialValues={{
                    tel_no: '',
                }}
                validationSchema={validateSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false)
                    }, 500)
                }}
            >
                {({
                    errors,
                    values,
                    setFieldValue,
                    isSubmitting,
                    touched,
                    handleBlur,
                    handleSubmit,
                    handleChange,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <InputMask
                                mask="99-99999-9999"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tel_no}
                            >
                                {() => (
                                    <TextField
                                        type="text"
                                        label="Número de telefone:  (Ex: 99-99999-9999)"
                                        name="tel_no"
                                        fullWidth
                                        variant="outlined"
                                        helperText={
                                            touched.tel_no ? errors.tel_no : ''
                                        }
                                        error={
                                            touched.tel_no &&
                                            Boolean(errors.tel_no)
                                        }
                                    />
                                )}
                            </InputMask>
                            <button
                                className="flex justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
                                type="submit"
                            >
                                Próximo
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </Container>
    )
}
