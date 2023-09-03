import { Html, Main, NextScript } from 'next/document'
import Head from './head'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
