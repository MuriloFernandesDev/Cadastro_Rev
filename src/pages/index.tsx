import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import LogoSvg from '../../public/LogoPurple.svg'
import { TextField } from '@mui/material'
import Button from './components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>BuyPhone</title>
        <meta name="description" content="Buy Phone para revendedores!" />
      </Head>

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
                <img src="/Cel.png" alt="Celular Flutuando" />
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
                  {/* <a
                                        className="w-full h-[38px] text-white font-medium text-xs uppercase bg-Loja rounded-md flex items-center justify-center hover:scale-105 ease-in-out duration-300"
                                        id="my-modal-6"
                                    >
                                        Entrar
                                    </a> */}

                  <label
                    htmlFor="my-modal-4"
                    className="w-full h-[38px] text-white font-medium text-xs uppercase bg-Loja rounded-md flex items-center justify-center hover:scale-105 ease-in-out duration-300"
                  >
                    entrar
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <label
                    htmlFor="my-modal-4"
                    className="modal cursor-pointer modal-bottom md:bg-white sm:modal-middle"
                  >
                    <label
                      className="modal-box relative h-[60vh] justify-between pb-14 md:h-[60vh] p-4 flex flex-col text-center items-center bg-white shadow-lg"
                      htmlFor=""
                    >
                      <div className="h-[1px] bg-Loja mt-[0.85rem] opacity-50 w-5/6 absolute"></div>
                      <h1 className="text-lg font-bold z-10 pb-2 flex justify-center uppercase w-24 bg-white">
                        Entrar
                      </h1>
                      <TextField
                        label="Email"
                        type="text"
                        name="email"
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Senha"
                        type="password"
                        name="email"
                        fullWidth
                        variant="outlined"
                      />
                      <button
                        className="flex mt-[1.5rem] p-2 justify-center mx-auto font-medium uppercase w-full text-white text-xl py-3 rounded-md hover:scale-105 ease-in-out duration-300 bg-Loja"
                        type="submit"
                      >
                        Entrar
                      </button>

                      <a className="font-semibold" href="">
                        Esqueci minha senha{' '}
                      </a>
                    </label>
                  </label>

                  <Link href={'/Welcome'}>
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
