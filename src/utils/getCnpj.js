import axios from 'axios'

export default async function ApiCnpj(cnpj) {
  const res = await axios.get(
    `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}/json`
  )

  // var currentFont = localStorage.getItem('TESTES')
  // const { teste } = res.data
  // console.log(teste)

  // if (res.data.erro) {
  //   return
  // }

  return
}
