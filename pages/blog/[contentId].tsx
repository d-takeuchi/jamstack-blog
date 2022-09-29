import { GetStaticPaths, GetStaticProps } from 'next'

import { Layout } from '../../components/Layout'
import { Blog } from '../../types/type'
import { getBlogData, getAllBlogIds } from '../../libs/fetch'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blog = await getBlogData(ctx.params.contentId as string)
  return {
    props: blog,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllBlogIds()
  return {
    paths,
    fallback: false,
  }
}

const BlogDetail: React.FC<Blog> = ({ id, title, body }) => {
  return (
    <Layout title={title}>
      <div>{body}</div>
    </Layout>
  )
}

export default BlogDetail
