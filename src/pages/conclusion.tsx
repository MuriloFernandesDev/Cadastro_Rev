import Image from 'next/image'
import GroupImg from '../../public/group.png'

export default function conclusion() {
  return (
    <>
      <h1 className="text-black text-xl font-semibold">Tudo pronto!</h1>
      <h2 className="text-black">Agora é só aguardar</h2>

      <h3 className="text-sm">
        O seu cadastro de usuário foi concluído e está sob análise. Enviaremos a
        resposta da sua solicitação em seu e-mail e também atualizaremos aqui.
      </h3>
      <div className="w-64 h-auto">
        <Image src={GroupImg} layout="responsive" quality={100}></Image>
      </div>
    </>
  )
}
