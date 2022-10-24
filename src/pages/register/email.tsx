import * as yup from 'yup'
import Progress from '../../components/Progress'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/InputElement'
import { useRouter } from 'next/router'
import { getLocalStorage } from '../../utils/localStorage'

type SignInFormData = {
  email: string
}

export default function email() {
  const router = useRouter()
  const storage = getLocalStorage('@BuyPhone_email')

  const signInFormSchema = yup.object().shape({
    email: yup
      .string()
      .required('Campo obrigatório')
      .email('Esse campo precisa ser um e-mail'),
  })

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    localStorage.setItem('@BuyPhone_email', JSON.stringify(values.email))
    router.push('/register/phone')
  }

  return (
    <>
      <Progress value="40" />
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="form-control w-full"
      >
        <div className="mt-8 mb-6">
          <h2 className="text-black text-xl mt-2">Qual seu E-mail?</h2>
        </div>

        <Input
          {...register('email')}
          type="text"
          placeholder="E-mail"
          error={errors.email}
          defaultValue={storage ?? ''}
        />

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
