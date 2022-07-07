import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import LogoSvg from '../../public/LogoPurple.svg'
import CelSvg from '../../public/Cel.svg'
import { TextField } from '@mui/material'

export default function home() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-white flex items-center justify-center">
        <div className="glass z-10 absolute left-0 w-full h-full"></div>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col">
            <div className="pt-4 w-3/5 h-auto mx-auto z-20 relative pb-2 lg:w-80">
              <Image
                src={LogoSvg}
                layout="responsive"
                quality={100}
                alt="Logo BuyPhone"
              />
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col items-center pt-4 z-20 relative">
                <div className="w-96 h-auto">
                  <Image
                    src={CelSvg}
                    layout="responsive"
                    quality={100}
                    alt="Celular"
                  />
                </div>
              </div>
              <div className="card max-w-lg mx-auto h-1/4 text-Loja shadow-lg lg:bg-white z-20">
                <div className="card-body ">
                  <h1 className="font-bold text-2xl">
                    A oportunidade de aumentar o lucro de suas vendas
                  </h1>
                  <p className="text-xs">
                    Tenha acesso a preços imbatíveis de iPhones nacionais
                    lacrados para revenda!
                  </p>
                  <Link href={'https://loja.buyphone.com.br/login'}>
                    <a className="w-full h-[38px] text-white font-medium text-xs uppercase bg-Loja rounded-md flex items-center justify-center hover:scale-105 ease-in-out duration-300">
                      Entrar
                    </a>
                  </Link>

                  <Link href={'/welcome'}>
                    <a className="w-full h-[38px] border font-medium text-xs uppercase border-Loja rounded-md flex items-center justify-center hover:scale-105 ease-in-out duration-300">
                      Cadastrar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
