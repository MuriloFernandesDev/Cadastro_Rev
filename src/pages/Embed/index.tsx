export default function Embed() {
  return (
    <div className="flex mx-auto max-w-7xl md:w-2/3 items-center mt-32 flex-col">
      <h1 className="text-purple-store opacity-10 text-6xl md:text-8xl font-bold md:absolute md:leading-3">
        ENTENDA
      </h1>
      <h2 className="uppercase text-2xl text-center ml-4 font-bold pb-2 md:mt-[1rem]">
        ASSISTA AO VÍDEO E ENTENDA MELHOR!
      </h2>
      <div className="bg-button w-20 h-[5px] rounded-3xl"></div>
      <div className="flex relative justify-center w-[90%] md:w-[130%] max-w-7xl mt-2 h-full pb-[51%] md:pb-[73%]">
        <iframe
          className="absolute h-full w-full border-none"
          src="https://www.youtube.com/embed/44p08kXybnA"
          loading="lazy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
