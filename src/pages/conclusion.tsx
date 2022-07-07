import Image from 'next/image'
import GroupImg from '../../public/group.svg'
import RocketImg from '../../public/foguete.svg'
import RocketImg1 from '../../public/rocket.gif'

export default function conclusion() {
  return (
    <>
      <h1 className="text-black text-xl font-semibold">Tudo pronto!</h1>
      <div className="flex justify-between relative">
        <h2 className="text-black">Agora é só aguardar</h2>
        <div className="w-28 h-auto -mt-[3.5rem]">
          <Image src={RocketImg1} layout="responsive" quality={100}></Image>
        </div>
      </div>

      <h3 className="text-sm">
        O seu cadastro de usuário foi concluído e está sob análise. Enviaremos a
        resposta da sua solicitação em seu e-mail e também atualizaremos aqui.
      </h3>
      <div className="w-64 h-auto mt-[2.5rem]">
        <Image src={GroupImg} layout="responsive" quality={100}></Image>
      </div>
      <button
        className="flex mt-[1.5rem] justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
        type="submit"
      >
        <a
          className="w-full h-full"
          href="https://pedidos.buyphone.com.br/login"
        >
          {' '}
          entrar
        </a>
      </button>
    </>
  )
}
