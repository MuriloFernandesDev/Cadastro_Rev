import axios from 'axios'

export default async function ApiCnpj(cnpj) {
  const res = await axios.get(
    `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}/json`
  )
  console.log(res)

  if (res.data.erro) {
    return
  }

  const { logradouro, localidade, uf, bairro } = res.data

  localStorage.setItem('adress', JSON.stringify(logradouro))
  localStorage.setItem('city', JSON.stringify(localidade))
  localStorage.setItem('state', JSON.stringify(uf))
  localStorage.setItem('district', JSON.stringify(bairro))
  return
}
