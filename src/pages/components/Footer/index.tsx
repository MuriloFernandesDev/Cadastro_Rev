import Image from 'next/image'
import LogoMatchImg from '../../../../public/LogoMatch.svg'
import LogoImg from '../../../../public/LogoPurple.svg'
export function Footer() {
  return (
    <div id="WeAre" className="w-full bg-white">
      <div className="max-w-7xl mx-auto items-center pt-5 pb-10 flex flex-col text-center text-purple-store md:min-h-[40vw] md:pt-10 md:flex-row md:text-left md:w-5/6">
        <div className="w-1/2 relative pb-5">
          <div className="absolute -mt-16 ml-14 hidden md:block">
            <div className="w-10 h-10 -rotate-[40deg] border-[2px] border-button rounded-lg absolute ml-14"></div>
            <div className="w-10 h-10 -rotate-[40deg] border-[2px] bg-button border-none rounded-lg absolute ml-12 mt-4 "></div>
          </div>
          <div className="flex justify-center md:justify-end md:pr-14">
            <div className="w-2/3 h-auto">
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
          <div>
            <h1 className="text-xl uppercase tracking-wide">nós somos:</h1>
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
  )
}
