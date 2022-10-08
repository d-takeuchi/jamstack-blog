import { css } from '@emotion/react'
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
    <div css={container}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />
      <main css={wrapper}>{children}</main>
      <Footer />
    </div>
  )
}

const container = css`
  min-height: 100vh;
  position: relative;
  padding-bottom: 120px;
  box-sizing: border-box;
`
const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`
