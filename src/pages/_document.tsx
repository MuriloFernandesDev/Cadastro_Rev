import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Cadastro | BuyPhone</title>
          <meta
            name="description"
            content="Nós conectamos com um match, quem deseja comprar produtos da marca Apple com quem deseja vender. O comprador economiza até 30% e o associado ganha dinheiro com seus pontos!"
          />

          <link rel="icon" type="image/ico" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-16" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
