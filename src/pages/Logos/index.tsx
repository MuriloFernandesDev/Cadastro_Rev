import Image from 'next/image'
import CasasBahiaImg from '../../../public/CasasBahia.svg'
import MagazineImg from '../../../public/Magalu.svg'
import AmericanasImg from '../../../public/Americanas.svg'
import PontoFrioImg from '../../../public/PontoFrio.svg'
import ExtraImg from '../../../public/Extra.svg'

export default function Logo() {
  return (
    <div className="w-full pt-14 ">
      <div className="w-5/6 mx-auto flex flex-col gap-4 items-center justify-between md:flex-row md:gap-0">
        <div className="w-60 h-auto p-2">
          <Image
            className="md:grayscale hover:grayscale-0 transition duration-300"
            src={CasasBahiaImg}
            layout="responsive"
            alt="Logo Casas Bahia"
          ></Image>
        </div>
        <div className="w-40 h-auto mt-[1rem] p-2">
          <Image
            className="md:grayscale hover:grayscale-0 transition duration-300"
            src={MagazineImg}
            layout="responsive"
            alt="Logo Magalu"
          ></Image>
        </div>
        <div className="w-60 h-auto p-2">
          <Image
            className="md:grayscale hover:grayscale-0 transition duration-300"
            src={AmericanasImg}
            layout="responsive"
            alt="Logo Americanas"
          ></Image>
        </div>
        <div className="w-40 h-auto p-2">
          <Image
            className="md:grayscale hover:grayscale-0 transition duration-300"
            src={PontoFrioImg}
            layout="responsive"
            alt="Logo Ponto Frio"
          ></Image>
        </div>
        <div className="w-32 h-auto md:-mt-[1.50rem] p-2">
          <Image
            className="md:grayscale hover:grayscale-0 transition duration-300"
            src={ExtraImg}
            layout="responsive"
            alt="Logo Extra"
          ></Image>
        </div>
      </div>
    </div>
  )
}
