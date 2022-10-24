import * as yup from 'yup'
import Progress from '../../components/Progress'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/InputElement'
import { useRouter } from 'next/router'
import { getLocalStorage } from '../../utils/localStorage'

type SignInFormData = {
  nome: string
}

export default function name() {
  const router = useRouter()
  const storage = getLocalStorage('@BuyPhone_name')

  const signInFormSchema = yup.object().shape({
    nome: yup
      .string()
      .required('Campo nome é Obrigatório!')
      .min(10, 'Digite seu nome completo!')
      .max(40, 'Nome muito longo!'),
  })

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    localStorage.setItem('@BuyPhone_name', JSON.stringify(values.nome))
    router.push('/register/cpf')
  }

  return (
    <>
      <Progress value="20" />
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="form-control w-full"
      >
        <div className="mt-8 mb-6">
          <h1 className="font-semibold text-sm text-black opacity-50">
            Vamos começar
          </h1>
          <h2 className="text-black text-xl mt-2">Qual seu nome completo?</h2>
        </div>

        <Input
          {...register('nome')}
          type="text"
          placeholder="Nome"
          error={errors.nome}
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
