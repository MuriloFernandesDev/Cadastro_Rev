import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState, useEffect, FormEvent } from 'react' //
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface State {
    amount: string
    password: string
    confirmpassword: string
    weight: string
    weightRange: string
    showPassword: boolean
}

export default function RegSenha() {
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        confirmpassword: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    })

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value })
        }
    const handleChange2 =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value })
        }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        })
    }

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    // const handleMouseDownconfirmpassword = (
    //     event: React.MouseEvent<HTMLButtonElement>
    // ) => {
    //     event.preventDefault()
    // }

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: '',
        },
        validationSchema: yup.object({
            password: yup.string().required('Password is required'),
            confirmpassword: yup
                .string()
                .required('Password confirmation is required')
                .oneOf([yup.ref('password')], 'Passwords must match'),
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
                    password: values,
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
            <h1 className="pb-5 text-black text-xl font-semibold">
                Vamos criar uma senha para o seu acesso?
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        name="password"
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={handleChange2('confirmpassword')}
                        endAdornment={
                            <InputAdornment position="end"></InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-700 ml-2">
                        {formik.errors.password}
                    </div>
                ) : null}
                <Button />
            </form>
        </>
    )
}
