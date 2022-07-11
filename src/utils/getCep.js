import axios from 'axios'

export default async function ApiCep(cep) {
  const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
  console.log(res.data)

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
