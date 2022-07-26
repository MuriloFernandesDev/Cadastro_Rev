import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

const MyCustom404Page = (props) => {
  const router = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Head>
        <title>BuyPhone | Página não encontrada</title>
      </Head>
      <h1>Erro 404</h1>
      <p>Desculpa, essa página não foi encontrada.</p>
      <h2>
        <Link href="/">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>
            Voltar para o início.
          </a>
        </Link>
      </h2>
      <h3 className="cursor-pointer" onClick={() => router.back()}>
        <a style={{ color: 'blue', textDecoration: 'underline' }}>
          Voltar para a página anterior.
        </a>
      </h3>
      <h4>
        <Link href="https://wa.me/5518997188537">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>
            Entrar em contato.
          </a>
        </Link>
      </h4>
    </div>
  )
}

export default MyCustom404Page
