import Head from 'next/head'
import { Footer } from './components/Footer'
import styles from './styles.module.scss'
import LogoImg from '../../public/LogoPurple.svg'
import LogoActiveImg from '../../public/LogoWhite.svg'
import Image from 'next/image'
import { Main } from './components/Main'
import { Content } from './components/Content'
import { Doubts } from './components/Doubts'
import React, { useState, useEffect, useRef } from 'react'
import { Depoiments } from './components/Depoiments'

export default function Home() {
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
                    href="#Experience"
                  >
                    Experiência
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#OurSite"
                  >
                    Nosso site
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-white font-medium text-lg hover:text-blue-500 md:text-purple-store"
                    href="#WeAre"
                  >
                    Nós somos
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="bg-button h-10 w-full text-white flex justify-center items-center p-5 rounded-xl hover:scale-125 ease-in-out duration-300"
                    href="/home"
                  >
                    Cadastrar
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
            <li>
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#Experience"
              >
                Experiência
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#OurSite"
              >
                Nosso site
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-purple-store font-medium text-lg hover:text-blue-500"
                href="#WeAre"
              >
                Nós somos
              </a>
            </li>
            <li className="mr-6">
              <a
                className="bg-button h-10 w-full text-white uppercase font-bold flex justify-center items-center p-5 rounded-xl hover:scale-125 ease-in-out duration-300"
                href="/home"
              >
                Cadastrar
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Main />
        <div id="PosiX" ref={boxRef}>
          <Content />
        </div>
        <Depoiments />

        <div id="PosiY" ref={boxRef2}>
          <Doubts />
        </div>
      </main>
      <Footer />
    </>
  )
}
