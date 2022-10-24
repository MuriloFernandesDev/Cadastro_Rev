import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styles from './styles.module.scss'

export interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface StaticRequire {
  default: StaticImageData
}

declare type StaticImport = StaticRequire | StaticImageData

interface Props {
  image: string | StaticImport
  name: string
  profissional: string
  instagram: string
  depoiment: string
  linkVideo: string
}

export const CardDepoiments = ({
  image,
  name,
  profissional,
  instagram,
  depoiment,
  linkVideo,
}: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row max-w-5xl mx-auto ">
      <div className="md:w-2/3">
        <div className="flex gap-3 relative">
          <div className={styles.effect_border}>
            <Image
              className={'mask mask-circle '}
              src={image}
              alt={name}
              width={130}
              height={130}
              layout="fixed"
              placeholder="blur"
            />
          </div>

          <div className="flex flex-col items-start text-info-content">
            <span className="flex items-center gap-1">
              <span>{name}</span>
            </span>
            <p>{profissional}</p>
            <a
              className="flex items-center gap-1"
              target={'_blank'}
              href={`https://${instagram}`}
            >
              <span>@{name}</span>
              <FontAwesomeIcon
                icon={faInstagram}
                className="mr-2 w-4 h-4 text-info-content"
              />
            </a>
          </div>
        </div>
        <div className="relative md:pr-10 text-center md:text-start mt-4 px-5 md:px-0 text-info-content">
          <span>“{depoiment}”</span>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="text-info-content/20 h-8 w-8 absolute left-0 top-0 -mt-4 -ml-3 rotate-180"
          />
        </div>
      </div>

      <div className="flex justify-center md:w-1/3">
        <div className="w-full flex justify-center">
          <div className="w-full h-auto relative flex">
            <div className="relative w-full h-full pb-[56.25%]">
              <iframe
                className="absolute w-full h-full flex border-none rounded-3xl shadow-black/40 shadow-md m-0"
                placeholder="blur"
                loading="lazy"
                src={linkVideo}
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
  )
}
