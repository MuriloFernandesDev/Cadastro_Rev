import axios from 'axios'

export default async function ApiCnpj(cnpj) {
  const res = await axios.get(
    `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}/json`
  )

  if (res.data.erro) {
    return
  }

  const { BAIRRO, CEP, LOGRADOURO, MUNICIPIO, NUMERO, UF } = res.data

  localStorage.setItem('adress', JSON.stringify(LOGRADOURO))
  localStorage.setItem('city', JSON.stringify(MUNICIPIO))
  localStorage.setItem('state', JSON.stringify(UF))
  localStorage.setItem('district', JSON.stringify(BAIRRO))
  localStorage.setItem('number', JSON.stringify(NUMERO))
  localStorage.setItem('postal', JSON.stringify(CEP))
  return
}
