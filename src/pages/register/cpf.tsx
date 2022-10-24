import * as yup from 'yup'
import Progress from '../../components/Progress'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/InputElement'
import { useRouter } from 'next/router'
import { getLocalStorage } from '../../utils/localStorage'
import { maskCpfInput } from '../../utils/masks'

type SignInFormData = {
  cpf: string
}

export default function cpf() {
  const router = useRouter()
  const storage = getLocalStorage('@BuyPhone_cpf')

  const signInFormSchema = yup.object().shape({
    cpf: yup
      .string()
      .required('Campo CPF é Obrigatório!')
      .min(10, 'Digite seu CPF completo!')
      .max(40, 'Nome muito longo!'),
  })

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    localStorage.setItem('@BuyPhone_cpf', JSON.stringify(values.cpf))
    router.push('/register/email')
  }

  return (
    <>
      <Progress value="30" />
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="form-control w-full"
      >
        <div className="mt-8 mb-6">
          <h2 className="text-black text-xl mt-2">Qual seu CPF?</h2>
        </div>

        <Input
          {...register('cpf')}
          type="text"
          placeholder="CPF"
          error={errors.cpf}
          onKeyUp={(e) => maskCpfInput(e)}
          maxLength={14}
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
