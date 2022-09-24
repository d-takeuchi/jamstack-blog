import { Layout } from '../components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ'}>
      <p>Hello World</p>
    </Layout>
  )
}

export default Home
