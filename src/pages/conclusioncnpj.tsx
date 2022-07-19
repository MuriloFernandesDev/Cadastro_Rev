import Image from 'next/image'
import GroupImg from '../../public/Group105.svg'
import RocketImg1 from '../../public/rocket.gif'

export default function conclusioncnpj() {
  return (
    <>
      <div className="grid gap-8">
        <div className="flex flex-col gap-3 justify-between relative">
          <h1 className="text-black text-xl font-semibold">Tudo pronto!</h1>
          <h2 className="text-black">Agora é só aguardar</h2>
          <div className="w-28 h-auto absolute -mt-[1rem] ml-[50vw] md:ml-[32vw]">
            <Image src={RocketImg1} layout="responsive" quality={100}></Image>
          </div>
          <h3 className="text-sm">
            O cadastro da sua empresa foi concluído e está sob análise.
            Enviaremos a resposta da sua solicitação em seu e-mail.
          </h3>
        </div>

        <div className="w-64 h-auto">
          <Image src={GroupImg} layout="responsive" quality={100}></Image>
        </div>
        <button className="btn btn-primary" type="submit">
          <a
            className="w-full h-full flex items-center justify-center"
            href="https://loja.buyphone.com.br/login"
          >
            {' '}
            entrar
          </a>
        </button>
      </div>
    </>
  )
}
