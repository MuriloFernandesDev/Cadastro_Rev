export function Doubts() {
  return (
    <div className="w-full bg-dark">
      <div className="max-w-7xl w-5/6 md:w-full mx-auto pb-24 flex flex-col items-center min-h-screen relative">
        <div className="pt-24 pb-10 flex flex-col items-center md:pt-24">
          <h1 className="text-3xl md:text-[3rem] text-white opacity-10 font-extrabold md:absolute md:leading-3">
            DÚVIDAS FREQUENTES
          </h1>
          <h2 className="uppercase text-white text-4xl text-center font-bold mt-2 md:text-left">
            DÚVIDAS FREQUENTES
          </h2>
          <div className="bg-button h-1 w-16 rounded-lg mt-4"></div>
        </div>
        <div className="relative xl:ml-[70%] lg:ml-[66%] hidden md:block md:ml-[50%]">
          <div className="w-32 mt-28 flex h-auto absolute justify-end md:block">
            <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl absolute ml-[30%] mt-2"></div>
            <div className="w-28 h-28 -rotate-[40deg] border-[4px] border-button rounded-3xl"></div>
          </div>
        </div>
        {/* DUVIDAS FREQUENTES - TROCAR LOREM */}
        <div className="collapse collapse-arrow w-full">
          <input id="Check1" type="checkbox" />
          <label htmlFor="Check1"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Porque são tão baratos?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              Nós compramos através de pontos de cartão de crédito e milhas de
              nossos associados em promoções nas principais lojas do Brasil!
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check2" type="checkbox" />
          <label htmlFor="Check2"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Os produtos possuem nota fiscal?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              Sim, porém como os produtos são comprados através do benefício de
              pontos de nossos associados, a NF do produto é enviada para nossa
              equipe para validação da procedência do produto. Porém não
              enviamos ela ao comprador, a fim de preservar os dados pessoais
              dos associados.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check3" type="checkbox" />
          <label htmlFor="Check3"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Aparelhos tem garantia?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              Com os produtos da Apple você não precisa se preocupar com nota
              fiscal, pois assim que você ativa o iCloud, consegue ter acesso a
              todos os benefícios de garantia. Todos os aparelhos possuem
              garantia mundial de 1 ano da Apple.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check4" type="checkbox" />
          <label htmlFor="Check4"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Qual a forma de pagamento?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              Pix, cartão de crédito e pagamento personalizado (Entrada no PIX +
              parcelas no cartão).
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check5" type="checkbox" />
          <label htmlFor="Check5"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Qual prazo de entrega?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              Assim que o pagamento é confirmado o prazo é de 7 a 15 dias úteis.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check6" type="checkbox" />
          <label htmlFor="Check6"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Só trabalham com aparelhos novos?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              Os produtos são novos (lacrados) não são de vitrine! Comprados nas
              principais lojas do Brasil.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check7" type="checkbox" />
          <label htmlFor="Check7"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Qual endereço físico?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">
              A BuyPhone é uma Startup, não somos uma loja física e trabalhamos
              de forma digital em todo o Brasil. O endereço de nossa operação,
              onde nossa equipe trabalha, fica localizado em R: Av Brasilia 2121
              Sala 1116, Jardim Nova Yorque, Araçatuba-SP, CEP: 16018-000.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow w-full">
          <input id="Check8" type="checkbox" />
          <label htmlFor="Check8"></label>
          <div className="collapse-title text-xl font-medium text-white bg-dark_doubts w-full">
            Qual CNPJ da BuyPhone?
          </div>

          <div className="collapse-content text-white mt-1">
            <div className="w-full h-[1px] bg-dark_doubts"></div>

            <div className="w-full h-[1px] bg-dark_doubts"></div>
            <p className="p-4">CNPJ: 45.679.637/0001-94.</p>
          </div>
        </div>
        {/* FIM DUVIDAS FREQUENTES */}
        <a
          className="h-10 w-2/3 mt-8 bg-button flex items-center justify-center text-sm rounded-lg text-white uppercase font-medium hover:scale-110 ease-in-out duration-300 md:w-1/3"
          href="https://api.whatsapp.com/send?phone=5518997188537&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20pre%C3%A7os%20e%20condi%C3%A7%C3%B5es%20de%20pagamento%20da%20BuyPhone"
        >
          falar com um consultor
        </a>
      </div>
    </div>
  )
}
