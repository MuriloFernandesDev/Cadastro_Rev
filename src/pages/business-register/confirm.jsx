import { useRouter } from 'next/router'
import { useLocalStorage } from '../../utils/useLocalStorage'
import Image from 'next/image'
import MapImg from '../../../public/undraw.svg'
import EditImg from '../../../public/Create.svg'
import Progress from '../../components/Progress'

export default function confirm() {
  const [district] = useLocalStorage('@BuyPhone_district', '')
  const [city] = useLocalStorage('@BuyPhone_city', '')
  const [state] = useLocalStorage('@BuyPhone_state', '')
  const [address] = useLocalStorage('@BuyPhone_address', '')
  const [number] = useLocalStorage('@BuyPhone_number', '')
  const router = useRouter()

  function submit() {
    router.push('/business-register/mean')
  }

  function BackCep() {
    localStorage.removeItem('@BuyPhone_number')
    router.push('/business-register/postal')
  }

  return (
    <>
      <Progress value="60" />
      <div className="grid gap-8 mt-8">
        <div className="w-64 h-auto mx-auto">
          <Image src={MapImg} layout="responsive"></Image>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="pb-2 mt-6 text-black text-xl font-semibold">
              {address ?? ''}, {number ?? ''}
            </h1>
            <h2 className="text-Loja opacity-50 text-sm">
              {district ?? ''}, {city ?? ''} - {state ?? ''}
            </h2>
          </div>
          <button>
            <div className="w-[24px] h-[24px] hover:opacity-50 duration-300">
              <a onClick={BackCep}>
                <Image src={EditImg} layout="responsive"></Image>
              </a>
            </div>
          </button>
        </div>

        <button onClick={submit} className="btn btn-primary w-full">
          Confirmar endereço
        </button>
      </div>
    </>
  )
}
