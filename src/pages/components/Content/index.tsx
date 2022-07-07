import Image from 'next/image'
import MockupImg from '../../../../public/mockup.png'
import PanToolIcon from '@mui/icons-material/PanTool'
import React, { createRef, useState, useEffect } from 'react'
import { AttachMoney, Leaderboard } from '@mui/icons-material'

export function Content() {
  // const boxRef = useRef<HTMLDivElement>(null)
  // const [y, setY] = useState<number | undefined>()

  // const getPosition = () => {
  //     const y = boxRef.current?.offsetTop
  //     setY(y)
  // }

  // useEffect(() => {
  //     getPosition()
  // }, [])
  // console.log(y)

  return (
    <div id="Experience" className="w-full bg-dark">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between pt-20 gap-20 md:flex-row md:items-start md:gap-0">
        <div className="relative w-5/6 md:w-1/3">
          <div className="bg-[url('/Ellipse18.png')] bg-no-repeat bg-local bg-cover -mt-14 absolute p-28"></div>
          <div className="flex flex-col pr-[30px] h-[200px] justify-between">
            <div className="flex items-center md:items-start md:flex-col">
              <div className="h-10 w-10 text-white flex justify-center items-center bg-button rounded-xl">
                <AttachMoney />
              </div>
              <h1 className="text-button text-2xl ml-2 font-medium mt-0 md:mt-4 md:ml-0">
                Obtenha maiores lucros
              </h1>
            </div>
            <div className="bg-white w-full h-[1px] opacity-10"></div>
            <span className="text-white">
              Com a BuyPhone você evita as dores de cabeça com produtos sem
              procedência, encomenda iPhones 100% nacionais e lacrados e aumenta
              seus lucros!
            </span>
          </div>
        </div>

        <div className="relative w-5/6 md:w-1/3 md:mt-10">
          <div className="bg-[url('/Ellipse18.png')] bg-no-repeat bg-local bg-cover -mt-14 absolute p-28"></div>
          <div className="flex flex-col pr-[30px] h-[200px] justify-between">
            <div className="flex items-center md:items-start md:flex-col">
              <div className="h-10 w-10 text-white flex justify-center items-center bg-button rounded-xl">
                <Leaderboard />
              </div>
              <h1 className="text-button text-2xl ml-2 font-medium mt-0 md:mt-4 md:ml-0">
                Painel de controle do negócio
              </h1>
            </div>
            <div className="bg-white w-full h-[1px] opacity-10"></div>
            <span className="text-white">
              Gerencie todas as suas vendas e seus clientes, através do painel
              de controle que oferecemos a você de forma gratuita!
            </span>
          </div>
        </div>

        <div className="relative w-5/6 md:w-1/3">
          <div className="bg-[url('/Ellipse18.png')] bg-no-repeat bg-local bg-cover -mt-14 absolute p-28"></div>
          <div className="flex flex-col pr-[30px] h-[200px] justify-between">
            <div className="flex items-center md:items-start md:flex-col">
              <div className="h-10 w-10 text-white flex justify-center items-center bg-button rounded-xl">
                <PanToolIcon />
              </div>
              <h1 className="text-button text-2xl ml-2 font-medium mt-0 md:mt-4 md:ml-0">
                Tenha acesso exclusivo
              </h1>
            </div>
            <div className="bg-white w-full h-[1px] opacity-10"></div>
            <span className="text-white">
              Seja um parceiro revendedor e tenha acesso a um canal de pedidos
              exclusivos para comprar iPhones ainda mais baratos!
            </span>
          </div>
        </div>
      </div>
      {/* <img className="absolute -ml-24 mt-10" src="/Rectangle.png"></img>
            <img className="absolute -ml-8 mt-12" src="/Rectangle.png"></img> */}
      <div className="w-32 h-auto absolute float-left -ml-12 mt-28 hidden md:block">
        <div className="w-32 h-32 -rotate-[40deg] border-[4px] border-button rounded-3xl absolute ml-14 mt-2 "></div>
        <div className="w-32 h-32 -rotate-[40deg] border-[4px] border-button rounded-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl flex items-center pb-10 flex-col relative pt-10 md:pt-40">
        <h1 className="text-2xl md:text-7xl text-white opacity-10 font-extrabold md:absolute md:leading-3">
          COMO FUNCIONA?
        </h1>
        <h2 className="uppercase text-white text-xl text-center font-bold md:mt-3 md:text-left">
          cONFIRA 6 PASSOS IMPORTANTES
        </h2>
        <div className="bg-button w-16 h-1 rounded-xl mt-4"></div>
      </div>
      <div className="mx-auto max-w-7xl w-5/6 flex border border-[#ffffff44] rounded-xl h-full">
        <div className="flex flex-col p-4 text-center md:text-start justify-between text-white md:p-12 md:flex-row">
          <div className="flex flex-col justify-between pb-5 gap-5 w-full md:w-1/2">
            <div>
              <h1 className="font-bold text-xl">1- Crie sua conta</h1>
              <p className="ml-6">100% grátis, simples e rápido!</p>{' '}
            </div>
            <div>
              <h1 className="font-bold text-xl">2- Faça seu pedido</h1>
              <p className="ml-6">
                Revendedor validado tem acesso a preço de atacado
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl">3- Pague com segurança</h1>
              <p className="ml-6">
                Você pode pagar de forma personalizada no crédito ou pix!
              </p>{' '}
            </div>
          </div>
          {/* SPACE */}
          <div className="flex flex-col justify-between gap-5 w-full md:w-1/2">
            <div>
              <h1 className="font-bold text-xl">
                4- Nosso associado nos envia o produto
              </h1>
              <p className="ml-6">
                Poucos minutos após a confirmação de pagamento seu pedido já
                está a caminho da nossa central.
              </p>{' '}
            </div>
            <div>
              <h1 className="font-bold text-xl">5- Nós enviamos até você</h1>
              <p className="ml-6">
                O produto passa pela nossa central de distribuição para
                conferência e depois segue seu destino com seguro de envio.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl">
                6- O associado só recebe após 30 dias
              </h1>
              <p className="ml-6">
                Travamos o repasse do dinheiro para garantir uma transação 100%
                segura.
              </p>{' '}
            </div>
          </div>
        </div>
      </div>

      <div
        id="OurSite"
        className="mx-auto max-w-7xl pt-20 pb-10 flex flex-col items-center relative md:flex-row"
      >
        <div className="w-full h-auto flex justify-end relative md:w-3/6">
          <div className="w-full hidden h-auto md:flex items-center">
            <Image
              src={MockupImg}
              placeholder="blur"
              quality={100}
              layout="intrinsic"
              alt="Mockup Loja"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col relative items-center md:items-start">
          {/* <div className="absolute -ml-44 hidden md:block">
                        <div className="w-10 h-10 -rotate-[40deg] border-[2px] border-button rounded-lg absolute ml-14"></div>
                        <div className="w-10 h-10 -rotate-[40deg] border-[2px] bg-button border-none rounded-lg absolute ml-12 mt-4 "></div>
                    </div> */}
          <div className="absolute -ml-[35%] mt-[2%] hidden md:block">
            <div className="w-10 h-10 -rotate-[40deg] border-[2px] border-button rounded-lg absolute ml-14"></div>
            <div className="w-10 h-10 -rotate-[40deg] border-[2px] bg-button border-none rounded-lg  ml-12 mt-4 "></div>
          </div>
          <h1 className="text-3xl md:text-[4rem] text-white opacity-10 font-extrabold absolute leading-3">
            #DIFERENTE
          </h1>
          <h2 className="uppercase text-white text-lg font-bold mt-6 ml-4 tracking-wide text-center md:text-left">
            uMA PLATAFORMA CHEIA de benefícios
          </h2>
          <div className="flex flex-col justify-between p-4">
            <div className="flex items-center text-white pt-10">
              <div className="w-4 h-4 border-4 border-button rounded-full"></div>
              <div className="flex flex-col leading-4 ml-2">
                <h1>Tenha acesso a preços exclusivos de revendedor</h1>
                <h2 className="font-extralight italic">
                  Seja um revendedor validado para ter acesso aos melhores
                  preços!
                </h2>
              </div>
            </div>
            <div className="flex items-center text-white pt-10">
              <div className="w-4 h-4 border-4 border-button rounded-full"></div>
              <div className="flex flex-col leading-4 ml-2">
                <h1>Tenha acesso a preços exclusivos de revendedor</h1>
                <h2 className="font-extralight italic">
                  Seja um revendedor validado para ter acesso aos melhores
                  preços!
                </h2>
              </div>
            </div>
            <div className="flex items-center text-white pt-10">
              <div className="w-4 h-4 border-4 border-button rounded-full"></div>
              <div className="flex flex-col leading-4 ml-2">
                <h1>Tenha acesso a preços exclusivos de revendedor</h1>
                <h2 className="font-extralight italic">
                  Seja um revendedor validado para ter acesso aos melhores
                  preços!
                </h2>
              </div>
            </div>
            <div className="flex items-center text-white pt-10">
              <div className="w-4 h-4 border-4 border-button rounded-full"></div>
              <div className="flex flex-col leading-4 ml-2">
                <h1>Tenha acesso a preços exclusivos de revendedor</h1>
                <h2 className="font-extralight italic">
                  Seja um revendedor validado para ter acesso aos melhores
                  preços!
                </h2>
              </div>
            </div>
            <a
              className="h-10 w-3/5 mt-8 bg-button text-[80%] flex justify-center items-center mx-auto rounded-lg text-white uppercase font-medium hover:scale-125 ease-in-out duration-300 md:w-2/5 md:mx-0"
              href="/home"
            >
              quero me cadastrar
            </a>
            <div className="relative xl:ml-[85%] lg:ml-[68%] hidden md:block md:ml-[62%]">
              <div className="w-32 flex h-auto absolute justify-end md:block">
                <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl absolute ml-[30%] mt-2"></div>
                <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
