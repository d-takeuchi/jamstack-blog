import Head from 'next/head'
import { ReactNode } from 'react'
import { Footer } from './atoms/Footer'
import { Header } from './atoms/Header'

interface Props {
  title: string
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { title, children } = props
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
