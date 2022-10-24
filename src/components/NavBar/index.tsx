import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import LogoImg from '../../../public/LogoPurple.svg'
import LogoActiveImg from '../../../public/LogoWhite.svg'

interface navBarProps {
  navbar: boolean
}

export default function NavBar({ navbar }: navBarProps) {
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState)
  }

  return (
    <>
      <div className="fixed z-20 w-full">
        <div className="glass">
          <div
            className={
              'navbar transition-all duration-300 ' +
              (navbar ? 'bg-[#212b36] text-white' : 'bg-white text-[#212b36]')
            }
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex-1">
                <div
                  className={
                    'w-28 h-auto transition-all duration-300 text-center mt-2 '
                  }
                >
                  {navbar ? (
                    <Link href={'#Main'} passHref>
                      <a>
                        <Image
                          src={LogoActiveImg}
                          layout="intrinsic"
                          alt="logo"
                          className="object-contain"
                        />
                      </a>
                    </Link>
                  ) : (
                    <Link href={'#Main'} passHref>
                      <a>
                        <Image
                          src={LogoImg}
                          layout="intrinsic"
                          alt="logo"
                          className="object-contain"
                        />
                      </a>
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex-none hidden md:flex">
                {/* para desktop */}
                <div className=" gap-3 p-0 text-sm">
                  <button
                    className={
                      'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                    }
                  >
                    <Link href={'#understand'} passHref>
                      <a className="font-medium">Entenda melhor</a>
                    </Link>
                  </button>
                  <button
                    className={
                      'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                    }
                  >
                    <Link href={'#Experience'} passHref>
                      <a className="font-medium">Como funciona</a>
                    </Link>
                  </button>
                  <button
                    className={
                      'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                    }
                  >
                    <Link href={'#depoiments'} passHref>
                      <a className="font-medium">Depoimentos</a>
                    </Link>
                  </button>
                  <button
                    className={
                      'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                    }
                  >
                    <Link href={'#doubts'} passHref>
                      <a className="font-medium">Dúvidas</a>
                    </Link>
                  </button>
                  <button
                    className={
                      'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                    }
                  >
                    <Link href={'#WeAre'} passHref>
                      <a className="font-medium">Quem somos</a>
                    </Link>
                  </button>

                  <button className="btn btn-error py-1 rounded-xl transition-all duration-300 text-white">
                    <Link href={'/register/home'} passHref>
                      <a>Cadastrar</a>
                    </Link>
                  </button>
                </div>
              </div>
              <button className="block md:hidden" onClick={toggleDrawer}>
                <svg
                  className={
                    'swap-off fill-current ' +
                    (navbar ? 'text-white' : 'text-[#212b36]')
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </button>
              {/* para mobile */}
            </div>
          </div>
        </div>
      </div>

      {/* drawer/para/mobile */}
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
        direction="top"
        duration={400}
        className={
          'w-auto h-auto ' +
          (navbar ? 'bg-[#212b36] text-white' : 'bg-white text-[#212b36]')
        }
      >
        <ul className="flex flex-col max-w-md mx-auto text-lg py-10">
          <button
            className={'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')}
            onClick={toggleDrawer}
          >
            <Link href={'#understand'} passHref>
              <a className="font-medium">Entenda melhor</a>
            </Link>
          </button>
          <button
            className={'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')}
            onClick={toggleDrawer}
          >
            <Link href={'#Experience'} passHref>
              <a className="font-medium">Como funciona</a>
            </Link>
          </button>
          <button
            className={'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')}
            onClick={toggleDrawer}
          >
            <Link href={'#depoiments'} passHref>
              <a className="font-medium">Depoimentos</a>
            </Link>
          </button>
          <button
            className={'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')}
            onClick={toggleDrawer}
          >
            <Link href={'#doubts'} passHref>
              <a className="font-medium">Dúvidas</a>
            </Link>
          </button>
          <button
            className={'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')}
            onClick={toggleDrawer}
          >
            <Link href={'#WeAre'} passHref>
              <a className="font-medium">Quem somos</a>
            </Link>
          </button>

          <button className="btn btn-error mx-5 rounded-xl transition-all duration-300 text-white">
            <Link href={'/register/home'} passHref>
              <a>Cadastrar</a>
            </Link>
          </button>
        </ul>
      </Drawer>
    </>
  )
}
