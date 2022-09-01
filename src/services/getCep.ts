import axios from 'axios'

export default async function ApiCep(cep: any) {
  const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

  if (res.data.erro) {
    return
  }
  console.log(res)
  // const { logradouro, localidade, uf, bairro } = res.data

  // localStorage.setItem('address', JSON.stringify(logradouro))
  // localStorage.setItem('city', JSON.stringify(localidade))
  // localStorage.setItem('state', JSON.stringify(uf))
  // localStorage.setItem('district', JSON.stringify(bairro))
  return
}
