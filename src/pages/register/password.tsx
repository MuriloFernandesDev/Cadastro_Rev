import * as yup from 'yup'
import Progress from '../../components/Progress'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/InputElement'
import { useRouter } from 'next/router'

type SignInFormData = {
  password: string
  confirm_password: string
}

export default function password() {
  const router = useRouter()

  const signInFormSchema = yup.object().shape({
    password: yup.string().required('Campo obrigatório'),
    confirm_password: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
  })

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    localStorage.setItem('@BuyPhone_password', JSON.stringify(values.password))
    //enviar dados para a api aqui
    router.push('/register/confirm')
  }

  return (
    <>
      <Progress value="40" />
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="form-control w-full"
      >
        <div className="mt-8 mb-6">
          <h2 className="text-black text-xl mt-2">
            Vamos criar uma senha para o seu acesso?
          </h2>
        </div>
        <div className="grid gap-3">
          <Input
            {...register('password')}
            placeholder="Senha"
            error={errors.password}
            type="password"
          />
          <Input
            {...register('confirm_password')}
            placeholder="Confirmar de senha"
            error={errors.confirm_password}
            type="password"
          />
        </div>
        <div className="mt-4">
          {formState.isSubmitting ? (
            <button className="btn loading w-full upper-case" type="submit">
              Carregando...
            </button>
          ) : (
            <button className="btn btn-primary w-full upper-case" type="submit">
              Próximo
            </button>
          )}
        </div>
      </form>
    </>
  )
}
