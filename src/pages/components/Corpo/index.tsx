import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import LogoSvg from '../../../../public/LogoPurple.svg'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface Homeprops {
  children: ReactElement
}

export default function Corpo({ children }: Homeprops) {
  return (
    <>
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
      <div className="pt-4 w-3/5 z-50 h-auto mx-auto relative pb-2 lg:w-80">
        <Image
          src={LogoSvg}
          layout="responsive"
          quality={100}
          alt="Logo BuyPhone"
        />
      </div>
      <div className="card bg-white mb-10 z-50 w-full flex flex-col shadow-lg max-w-xl mx-auto">
        <div className="card-body">
          <div className="flex w-full items-center justify-between">
            <Link href={'/'}>
              <a>
                <ArrowBackIcon></ArrowBackIcon>
              </a>
            </Link>
            <progress
              className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
              value="2"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mt-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
