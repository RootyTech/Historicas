import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <meta name="theme-color" content='#6327BD' />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Históricas"/>
        <meta name="description" content="Instala la app y descubre cada día una una mujer histórica 🔔"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://historicas.vercel.app"/>
        <meta property="og:title" content="Históricas"/>
        <meta property="og:description" content="Instala la app y descubre cada día una una mujer histórica 🔔"/>
        <meta property="og:image" content="/metaopimage.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://historicas.vercel.app"/>
        <meta property="twitter:title" content="Históricas"/>
        <meta property="twitter:description" content="Instala la app y descubre cada día una una mujer histórica 🔔"/>
        <meta property="twitter:image" content="/metaopimage.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
