import { Layout } from '../components/Layout'
import type { NextPage } from 'next'
import { css } from '@emotion/react'

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ'}>
      <div css={[wrapper, homeContent]}>
        <h2 css={pageTitle}>Hello World</h2>
        <p>d-takeuchi's Engineer Blog</p>
      </div>
    </Layout>
  )
}

const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`

const homeContent = css`
  text-align: center;
  margin-top: 10%;
  p {
    font-size: 1.125rem;
    margin: 10px 0 42px;
  }
`

const pageTitle = css`
  font-size: 3rem;
`
export default Home
