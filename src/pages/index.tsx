import Head from 'next/head'
import styles from './styles.module.scss'
import LogoImg from '../../public/LogoPurple.svg'
import LogoActiveImg from '../../public/LogoWhite.svg'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import DinheiroImg from '../../public/Group28.svg'
import Embed from './Embed'
import Logo from './Logos'
import MockupImg from '../../public/mockup.png'
import PanToolIcon from '@mui/icons-material/PanTool'
import { AttachMoney, Leaderboard } from '@mui/icons-material'
import LogoMatchImg from '../../public/LogoMatch.svg'
import CLyviaImg from '../../public/client_lyvia.png'
import CGabrielImg from '../../public/client_gabriel.png'
import CLuizImg from '../../public/client_luiz.png'
import CIgorImg from '../../public/client_igor.png'
import CAmandaImg from '../../public/client_amanda.png'
import Quote2Img from '../../public/quote2.png'

export default function index() {
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false // RESPONSIVO

  const [navbar, setNavbar] = useState(false)
  const boxRef = useRef<HTMLDivElement | null>(null)
  const boxRef2 = useRef<HTMLDivElement | null>(null)

  const changeBackground = () => {
    // CODIGO ABAIXO PEGA A REF DO DARK1
    const posY = boxRef.current!.offsetTop
    const posX = boxRef.current!.getBoundingClientRect().height

    // CODIGO ABAIXO PEGA A REF DO DARK2
    const posY2 = boxRef2.current!.offsetTop
    const posX2 = boxRef2.current!.getBoundingClientRect().height

    if (
      (window.scrollY >= posY && window.scrollY <= posY + posX) ||
      (window.scrollY >= posY2 && window.scrollY <= posY2 + posX2)
    ) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <>
      <Head>
        <title>Revendedores | BuyPhone</title>
        <meta name="description" content="Buy Phone para revendedores!" />
      </Head>
      <nav className={navbar ? styles.navbar_active : styles.navbar}>
        <div className="mx-auto w-4/5 max-w-7xl flex items-center justify-between">
          <div className="w-28 h-auto">
            {navbar ? (
              <a href="#Main">
                <Image
                  src={LogoActiveImg}
                  layout="intrinsic"
                  alt="logo"
                  className="object-contain"
                />
              </a>
            ) : (
              <a href="#Main">
                <Image
                  src={LogoImg}
                  layout="intrinsic"
                  alt="logo"
                  className="object-contain"
                />
              </a>
            )}
          </div>

          <section className="MOBILE-MENU flex lg:hidden shadow-lg">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block delay-100 h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block delay-100 h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block delay-100 h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <div
              className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}
            >
              {' '}
              {/* // toggle class based on isNavOpen state // toggle
                            class based on isNavOpen state */}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between  min-h-[250px]">
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#understand"
                  >
                    Entenda melhor
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#Experience"
                  >
                    Como funciona
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#depoiments"
                  >
                    Depoimentos
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#doubts"
                  >
                    Dúvidas
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#WeAre"
                  >
                    Quem somos
                  </a>
                </li>
                <li className="mr-6">
                  <button className="btn btn-error">
                    <a
                      className="w-full h-full flex justify-center items-center"
                      href="/home"
                    >
                      Cadastrar
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
            <li>
              <a
                className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                href="#understand"
              >
                Entenda melhor
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#Experience"
              >
                Como funciona
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#depoiments"
              >
                Depoimentos
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#doubts"
              >
                Dúvidas
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#WeAre"
              >
                Quem somos
              </a>
            </li>
            <li className="mr-6">
              <button className="btn btn-error text-white py-1 rounded-xl">
                <a href="/home">Cadastrar</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div
          id="Main"
          className="w-full text-purple-store pt-40 pb-20 mx-auto max-w-7xl"
        >
          <div className="w-5/6 flex flex-col mx-auto items-center md:flex-row">
            <div className="w-full flex flex-col items-center gap-4 text-center md:w-1/2 md:block md:text-start md:gap-0">
              <h1 className="text-purple-store opacity-10 text-6xl md:text-8xl font-bold md:absolute md:leading-3">
                UMA NOVA
              </h1>
              <h2 className="uppercase text-2xl ml-4 font-bold pb-2 md:mt-2">
                FORMA de revender iPhones com segurança e aumentar seus Lucros
              </h2>
              <div className="w-full h-[1px] bg-black opacity-20"></div>
              <p className="ml-4">
                Esqueça a compra de produtos importados sem procedência,
                encomende <b>produtos 100% nacionais</b> e lacrados, comprados
                nas maiores lojas do Brasil!
              </p>
            </div>
            <div className="w-full h-auto ml-12 mt-12 md:w-1/2 md:mt-0">
              <Image
                src={DinheiroImg}
                quality={100}
                layout="responsive"
                alt="Imagem de Dinheiro"
              ></Image>
            </div>
          </div>
          <Logo /> {/*LOGOS DAS LOJAS / IMPORTANDO DA PASTA LOGOS*/}
          <div id="understand"></div>
          <Embed />
        </div>
        <div id="PosiX" ref={boxRef}>
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
                    Com a BuyPhone você evita as dores de cabeça com produtos
                    sem procedência, encomenda iPhones 100% nacionais e lacrados
                    e aumenta seus lucros!
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
                    Gerencie todas as suas vendas e seus clientes, através do
                    painel de controle que oferecemos a você de forma gratuita!
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
                    Seja um parceiro revendedor e tenha acesso a um canal de
                    pedidos exclusivos para comprar iPhones ainda mais baratos!
                  </span>
                </div>
              </div>
            </div>
            <div className="w-32 h-auto absolute float-left -ml-12 mt-28 hidden md:block">
              <div className="w-32 h-32 -rotate-[40deg] border-[4px] border-button rounded-3xl absolute ml-14 mt-2 "></div>
              <div className="w-32 h-32 -rotate-[40deg] border-[4px] border-button rounded-3xl"></div>
            </div>
            <div className="mx-auto max-w-7xl flex items-center pb-10 flex-col relative pt-10 md:pt-40">
              <h1 className="text-2xl md:text-7xl text-white opacity-10 font-extrabold md:absolute md:leading-3">
                COMO FUNCIONA?
              </h1>
              <h2 className="uppercase text-white text-2xl text-center font-bold md:mt-[0.5rem] md:text-left">
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
                    <h1 className="font-bold text-xl">
                      3- Pague com segurança
                    </h1>
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
                      Poucos minutos após a confirmação de pagamento seu pedido
                      já está a caminho da nossa central.
                    </p>{' '}
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">
                      5- Nós enviamos até você
                    </h1>
                    <p className="ml-6">
                      O produto passa pela nossa central de distribuição para
                      conferência e depois segue seu destino com seguro de
                      envio.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">
                      6- O associado só recebe após 30 dias
                    </h1>
                    <p className="ml-6">
                      Travamos o repasse do dinheiro para garantir uma transação
                      100% segura.
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
                <div className="absolute -ml-[35%] mt-[2%] hidden md:block">
                  <div className="w-10 h-10 -rotate-[40deg] border-[2px] border-button rounded-lg absolute ml-14"></div>
                  <div className="w-10 h-10 -rotate-[40deg] border-[2px] bg-button border-none rounded-lg  ml-12 mt-4 "></div>
                </div>
                <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-white opacity-10 font-extrabold absolute leading-3">
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
                      <h1>Produtos 100% lacrados</h1>
                      <h2 className="font-extralight italic">
                        Os produtos lacrados possuem 1 ano de garantia de
                        fábrica!
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center text-white pt-10">
                    <div className="w-4 h-4 border-4 border-button rounded-full"></div>
                    <div className="flex flex-col leading-4 ml-2">
                      <h1>Comprados nas principais lojas</h1>
                      <h2 className="font-extralight italic">
                        Produtos com procedência nacional
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center text-white pt-10">
                    <div className="w-4 h-4 border-4 border-button rounded-full"></div>
                    <div className="flex flex-col leading-4 ml-2">
                      <h1>Negociação personalizada</h1>
                      <h2 className="font-extralight italic">
                        Tenha o suporte completo de nosso consultor de vendas
                        para tirar todas as suas dúvidas
                      </h2>
                    </div>
                  </div>

                  <button className="btn btn-error text-white py-1 w-1/2 mt-10 mx-auto rounded-xl md:mx-0 ">
                    <a
                      className="w-full h-full flex justify-center items-center"
                      href="/home"
                    >
                      {' '}
                      quero me cadastrar
                    </a>
                  </button>
                  <div className="relative xl:ml-[29rem] lg:ml-[68%] hidden md:block md:ml-[62%]">
                    <div className="w-32 flex h-auto absolute justify-end md:block">
                      <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl absolute ml-[30%] mt-2"></div>
                      <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white pb-20" id="depoiments">
          <div className="w-5/6 mx-auto pt-20 flex flex-col items-center">
            <h1 className="text-3xl md:text-[7rem] font-bold text-purple-store uppercase opacity-10 absolute leading-4">
              DEPOIMENTOS
            </h1>
            <h2 className="text-3xl text-purple-store uppercase mt-4 text-center font-bold md:leading-[3.5rem] md:text-left md:mt-2 md:text-4xl">
              CLIENTES PARCEIROS
            </h2>

            <div className={styles.pallets_color}>
              <div className="flex flex-col mx-auto md:w-5/6 gap-28 max-w-7xl">
                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex flex-col w-full justify-center md:justify-start">
                    <div className="flex">
                      <div className={styles.effect_border}>
                        <div className="w-[130px] h-auto">
                          <a
                            className="w-full h-full"
                            target="_blank"
                            href="https://www.instagram.com/lyvianagib/"
                          >
                            <Image
                              className="rounded-full"
                              placeholder="blur"
                              src={CLyviaImg}
                              layout="fill"
                              alt="Lyvia perfil"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col ml-3 justify-center md:justify-start">
                        <h1 className="text-purple-store text-xl font-normal">
                          Lyvia Nagib Fulanetti
                        </h1>
                        <h2 className="text-purple-store text-lg">
                          Fisioterapeuta
                        </h2>
                        <a
                          className="text-sm"
                          target="_blank"
                          href="https://www.instagram.com/lyvianagib/"
                        >
                          @lyvianagib
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col pt-6 pb-4 md:pb-0">
                      <div className="absolute w-10 h-auto text-purple-store opacity-50">
                        <Image
                          src={Quote2Img}
                          layout="responsive"
                          alt="aspas image"
                          placeholder="blur"
                        />
                      </div>
                      <p className="absolte text-purple-store ml-2 mt-4 z-10">
                        “Comprei dois celulares, um pra mim e um pra minha irmã,
                        dois iPhones 11. O preço é muito abaixo. Vale muito a
                        pena!”
                      </p>
                    </div>
                  </div>
                  <div className={styles.box_embed}>
                    <div className={styles.embed_depoiments}>
                      <div className={styles.embed_dep}>
                        <iframe
                          placeholder="blur"
                          loading="lazy"
                          src="https://www.youtube.com/embed/Npmw1UcMnxM"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex flex-col w-full">
                    <div className="flex">
                      <div className={styles.effect_border}>
                        <div className="w-[130px] h-auto">
                          <a
                            className="w-full h-full"
                            target="_blank"
                            href="https://www.instagram.com/gabrielpessoamartins/"
                          >
                            <Image
                              className="rounded-full"
                              placeholder="blur"
                              src={CGabrielImg}
                              layout="fill"
                              alt="Gabriel perfil"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col ml-3 justify-center md:justify-start">
                        <h1 className="text-white text-xl font-normal">
                          Gabriel Martins
                        </h1>
                        <h2 className="text-white text-lg">Empresário</h2>
                        <a
                          className="text-sm"
                          target="_blank"
                          href="https://www.instagram.com/gabrielpessoamartins/"
                        >
                          @gabrielpessoamartins
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col pt-6 pb-4 md:pb-0">
                      <div className="absolute w-10 h-auto text-purple-store opacity-50">
                        <Image
                          src={Quote2Img}
                          placeholder="blur"
                          layout="responsive"
                          alt="aspas image"
                        />
                      </div>
                      <p className="absolte text-purple-store ml-2 mt-4 z-10">
                        “Celular zero, lacrado na caixa! Pesquisei bastante em
                        vários lugares e o preço deles é bem abaixo do mercado.”
                      </p>
                    </div>
                  </div>
                  <div className={styles.box_embed}>
                    <div className={styles.embed_depoiments}>
                      <div className={styles.embed_dep}>
                        <iframe
                          placeholder="blur"
                          loading="lazy"
                          src="https://www.youtube.com/embed/w1Sv0QIFxyA"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex flex-col w-full">
                    <div className="flex">
                      <div className={styles.effect_border}>
                        <div className="w-[130px] h-auto">
                          <a
                            className="w-full h-full"
                            target="_blank"
                            href="https://www.instagram.com/luizpuertas/"
                          >
                            <Image
                              className="rounded-full"
                              placeholder="blur"
                              src={CLuizImg}
                              layout="fill"
                              alt="Gabriel perfil"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col ml-3 justify-center md:justify-start">
                        <h1 className="text-white text-xl font-normal">
                          Luiz Henrique Puertas
                        </h1>
                        <h2 className="text-white text-lg">
                          Vendas de sistemas fotovoltaicos
                        </h2>
                        <a
                          className="text-sm"
                          target="_blank"
                          href="https://www.instagram.com/luizpuertas/"
                        >
                          @luizpuertas
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col pt-6 pb-4 md:pb-0">
                      <div className="absolute w-10 h-auto text-purple-store opacity-50">
                        <Image
                          src={Quote2Img}
                          layout="responsive"
                          placeholder="blur"
                          alt="aspas image"
                        />
                      </div>
                      <p className="absolte text-purple-store ml-2 mt-4 z-10">
                        “Um preço muito bom, paguei muito barato no Iphone
                        original lacrado!”
                      </p>
                    </div>
                  </div>
                  <div className={styles.box_embed}>
                    <div className={styles.embed_depoiments}>
                      <div className={styles.embed_dep}>
                        <iframe
                          placeholder="blur"
                          loading="lazy"
                          src="https://www.youtube.com/embed/t3U1o2I9WvI"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex flex-col w-full">
                    <div className="flex">
                      <div className={styles.effect_border}>
                        <div className="w-[130px] h-auto">
                          <a
                            className="w-full h-full"
                            target="_blank"
                            href="https://www.instagram.com/igorfortin/"
                          >
                            <Image
                              className="rounded-full"
                              placeholder="blur"
                              src={CIgorImg}
                              layout="fill"
                              alt="Gabriel perfil"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col ml-3 justify-center md:justify-start">
                        <h1 className="text-white text-xl font-normal">
                          Igor Fortin
                        </h1>
                        <h2 className="text-white text-lg">Advogado</h2>
                        <a
                          className="text-sm"
                          target="_blank"
                          href="https://www.instagram.com/igorfortin/"
                        >
                          @igorfortin
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col pt-6 pb-4 md:pb-0">
                      <div className="absolute w-10 h-auto text-purple-store opacity-50">
                        <Image
                          src={Quote2Img}
                          layout="responsive"
                          placeholder="blur"
                          alt="aspas image"
                        />
                      </div>
                      <p className="absolte text-purple-store ml-2 mt-4 z-10">
                        “IPhone 12 que adquiri na BuyPhone, perfeito! Novo, com
                        ótimas condições de preço e parcelamento.”
                      </p>
                    </div>
                  </div>
                  <div className={styles.box_embed}>
                    <div className={styles.embed_depoiments}>
                      <div className={styles.embed_dep}>
                        <iframe
                          placeholder="blur"
                          loading="lazy"
                          src="https://www.youtube.com/embed/vH0EjiMyZaQ"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex flex-col w-full">
                    <div className="flex">
                      <div className={styles.effect_border}>
                        <div className="w-[130px] h-auto">
                          <a
                            className="w-full h-full ronded-full"
                            target="_blank"
                            href="https://www.instagram.com/_amandalprado/"
                          >
                            <Image
                              className="rounded-full"
                              placeholder="blur"
                              src={CAmandaImg}
                              layout="fill"
                              alt="Gabriel perfil"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col ml-3 justify-center md:justify-start">
                        <h1 className="text-white text-xl font-normal">
                          Amanda L. Prado
                        </h1>
                        <h2 className="text-white text-lg">🧿</h2>
                        <a
                          className="text-sm"
                          target="_blank"
                          href="https://www.instagram.com/_amandalprado/"
                        >
                          @_amandalprado
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col pt-6 pb-4 md:pb-0">
                      <div className="absolute w-10 h-auto text-purple-store opacity-50">
                        <Image
                          src={Quote2Img}
                          layout="responsive"
                          placeholder="blur"
                          alt="aspas image"
                        />
                      </div>
                      <p className="absolte text-purple-store ml-2 mt-4 z-10">
                        “A Amanda adorou o produto que comprou na BuyPhone”
                      </p>
                    </div>
                  </div>
                  <div className={styles.box_embed}>
                    <div className={styles.embed_depoiments}>
                      <div className={styles.embed_dep}>
                        <iframe
                          placeholder="blur"
                          loading="lazy"
                          src="https://www.youtube.com/embed/xzX8LJv7VuQ"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="PosiY" ref={boxRef2}>
          <div className="w-full bg-dark" id="doubts">
            <div className="max-w-7xl w-5/6 md:w-full mx-auto pb-24 flex flex-col items-center relative">
              <div className="pt-24 pb-10 flex flex-col items-center md:pt-24">
                <h1 className="text-3xl md:text-[4rem] text-white opacity-10 text-center md:text-start font-extrabold md:absolute md:leading-3">
                  DÚVIDAS FREQUENTES
                </h1>
                <h2 className="uppercase text-white text-4xl md:leading-[1rem] text-center font-bold mt-2 md:text-left">
                  DÚVIDAS FREQUENTES
                </h2>
                <div className="bg-button h-1 w-16 rounded-lg mt-4"></div>
              </div>
              <div className="relative xl:ml-[70%] lg:ml-[66%] hidden md:block md:ml-[50%]">
                <div className="w-32 mt-28 flex h-auto absolute justify-end md:block">
                  <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl absolute ml-[30%] mt-2"></div>
                  <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl"></div>
                </div>
              </div>
              {/* DUVIDAS FREQUENTES - TROCAR LOREM */}
              <div className="collapse collapse-arrow w-full">
                <input id="Check1" type="checkbox" />
                <label htmlFor="Check1"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Porque são tão baratos?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    Nós compramos através de pontos de cartão de crédito e
                    milhas de nossos associados em promoções nas principais
                    lojas do Brasil!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check2" type="checkbox" />
                <label htmlFor="Check2"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Os produtos possuem nota fiscal?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    Sim, porém como os produtos são comprados através do
                    benefício de pontos de nossos associados, a NF do produto é
                    enviada para nossa equipe para validação da procedência do
                    produto. Porém não enviamos ela ao comprador, a fim de
                    preservar os dados pessoais dos associados.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check3" type="checkbox" />
                <label htmlFor="Check3"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Aparelhos tem garantia?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    Com os produtos da Apple você não precisa se preocupar com
                    nota fiscal, pois assim que você ativa o iCloud, consegue
                    ter acesso a todos os benefícios de garantia. Todos os
                    aparelhos possuem garantia mundial de 1 ano da Apple.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check4" type="checkbox" />
                <label htmlFor="Check4"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Qual a forma de pagamento?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    Pix, cartão de crédito e pagamento personalizado (Entrada no
                    PIX + parcelas no cartão).
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check5" type="checkbox" />
                <label htmlFor="Check5"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Qual prazo de entrega?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    Assim que o pagamento é confirmado o prazo é de 7 a 15 dias
                    úteis.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check6" type="checkbox" />
                <label htmlFor="Check6"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Só trabalham com aparelhos novos?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    Os produtos são novos (lacrados) não são de vitrine!
                    Comprados nas principais lojas do Brasil.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check7" type="checkbox" />
                <label htmlFor="Check7"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Qual endereço físico?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">
                    A BuyPhone é uma Startup, não somos uma loja física e
                    trabalhamos de forma digital em todo o Brasil. O endereço de
                    nossa operação, onde nossa equipe trabalha, fica localizado
                    em R: Av Brasilia 2121 Sala 1116, Jardim Nova Yorque,
                    Araçatuba-SP, CEP: 16018-000.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow w-full">
                <input id="Check8" type="checkbox" />
                <label htmlFor="Check8"></label>
                <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
                  Qual CNPJ da BuyPhone?
                </div>

                <div className="collapse-content text-white mt-1">
                  <div className="w-full h-[1px] bg-dark_doubts"></div>

                  <div className="w-full h-[1px] bg-dark_doubts"></div>
                  <p className="p-4">CNPJ: 45.679.637/0001-94.</p>
                </div>
              </div>
              {/* FIM DUVIDAS FREQUENTES */}
              <button className="btn btn-error text-white py-1 w-2/4 mt-10 mx-auto rounded-xl md:mx-0 ">
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="https://api.whatsapp.com/send?phone=5518997188537&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20pre%C3%A7os%20e%20condi%C3%A7%C3%B5es%20de%20pagamento%20da%20BuyPhone"
                >
                  {' '}
                  quero me cadastrar
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
      <div id="WeAre" className="w-full bg-white">
        <div className="max-w-7xl mx-auto items-center py-10 flex flex-col text-center text-purple-store md:flex-row md:text-left md:p-40">
          <div className="w-1/2 relative pb-5">
            <div className="absolute -mt-16 ml-14 hidden md:block">
              <div className="w-10 h-10 -rotate-[40deg] border-[2px] border-button rounded-lg absolute ml-14"></div>
              <div className="w-10 h-10 -rotate-[40deg] border-[2px] bg-button border-none rounded-lg absolute ml-12 mt-4 "></div>
            </div>
            <div className="flex justify-center md:justify-end md:pr-14">
              <div className="w-full h-auto md:w-2/3">
                <Image
                  src={LogoMatchImg}
                  layout="responsive"
                  quality={100}
                  alt="Logo BuyPhone"
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-4/5 gap-5 md:w-1/2 md:pb-5">
            <div className="flex flex-col justify-center items-center text-center md:items-start">
              <h1 className="text-xl uppercase tracking-wide">Quem somos:</h1>
              <h2 className="text-3xl font-semibold text-button">BUYPHONE</h2>
            </div>
            <div className="w-full h-[1px] bg-button"></div>
            <p>
              Nós conectamos com um match, quem deseja comprar produtos da marca
              Apple com quem deseja vender. O comprador economiza até 30% e o
              associado ganha dinheiro com seus pontos!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-purple-store bg-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)] md:p-11">
          <div className="w-32 h-auto p-2">
            <Image
              src={LogoImg}
              quality={100}
              layout="responsive"
              alt="Logo BuyPhone"
            ></Image>
          </div>
          <div className="flex justify-center p-2 flex-col items-center md:flex-row">
            <p className="mr-3">Araçatuba - SP, 16.018-000, Brasil</p>
            <p className="mr-3">45.679.637/0001-94</p>
            <p className="mr-3">
              <a href="https://wa.me/5518997188537">(18) 99718-8537</a>
            </p>
          </div>
          <div className="p-2 text-center md:text-left">
            <p>Copyright © 2022. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </>
  )
}
