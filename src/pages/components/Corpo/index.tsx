import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import LogoSvg from '../../../../public/LogoPurple.svg'

interface Homeprops {
  children: ReactElement
}

export default function Corpo({ children }: Homeprops) {
  return (
    <>
      <div className="glass z-10 absolute left-0 w-full h-[100vh]"></div>
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
      <div className="w-3/5 z-50 h-auto mx-auto relative p-4 lg:w-64">
        <Image
          src={LogoSvg}
          layout="responsive"
          quality={100}
          alt="Logo BuyPhone"
        />
      </div>
      <div className="px-4">
        <div className="card bg-white mb-10 z-50 w-full flex flex-col shadow-lg max-w-xl mx-auto">
          <div className="card-body">
            <div className="flex flex-col justify-between">
              <div className="mt-2">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
