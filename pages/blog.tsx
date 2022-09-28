import { Layout } from '../components/Layout'
import { GetStaticProps, NextPage } from 'next'
import { client } from '../libs/client'
import type { Blog as BlogType } from '../types/type'

interface Response {
  contents: BlogType[]
  totalCount: number
  offset: number
  limit: number
}

interface Props {
  blog: BlogType[]
}

const Blog: NextPage<Props> = (props) => {
  const { blog } = props
  return (
    <Layout title='ブログ'>
      <p>blog page</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogResponse = await client.get<Response>({
    endpoint: 'blog',
  })
  const blog = blogResponse.contents
  return {
    props: { blog },
  }
}
export default Blog
