import * as yup from 'yup'
import Progress from '../../components/Progress'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/InputElement'
import { useRouter } from 'next/router'
import { getLocalStorage } from '../../utils/localStorage'
import { masktel } from '../../utils/masks'

type SignInFormData = {
  mobile_phone: string
}

export default function phone() {
  const router = useRouter()
  const storage = getLocalStorage('@BuyPhone_mobile_phone')

  const signInFormSchema = yup.object().shape({
    mobile_phone: yup.string().required('Campo obrigatório'),
  })

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    localStorage.setItem(
      '@BuyPhone_mobile_phone',
      JSON.stringify(values.mobile_phone)
    )
    router.push('/register/password')
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
            Agora vamos precisar do número do seu telefone celular com DDD.
          </h2>
        </div>

        <Input
          {...register('mobile_phone')}
          type="text"
          placeholder="Telefone"
          error={errors.mobile_phone}
          onKeyUp={(e) => masktel(e)}
          maxLength={15}
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
