import { Testimonials } from '../Testimonials'

export function Depoiments() {
  // const boxRef = useRef<HTMLDivElement>(null)
  // const [y, setY] = useState<number | undefined>()

  // const getPosition = () => {
  //     const y = boxRef.current?.offsetTop
  //     setY(y)
  // }

  // useEffect(() => {
  //     getPosition()
  // }, [])
  // console.log(y)

  return (
    <>
      <div className="w-full bg-white pb-20 ">
        <div className="w-5/6 mx-auto pt-20 flex flex-col items-center">
          <h1 className="text-3xl md:text-[7rem] font-bold text-purple-store opacity-10 absolute leading-3">
            DEPOIMENTOS
          </h1>
          <h2 className="text-2xl text-purple-store mt-4 text-center font-bold md:text-left md:mt-2 md:text-4xl">
            REVENDEDORES PARCEIROS
          </h2>

          <Testimonials />
        </div>
      </div>
    </>
  )
}
