import { GetStaticPaths, GetStaticProps } from 'next'

import { Layout } from '../../components/Layout'
import { Blog } from '../../types/type'
import { getBlogData, getAllBlogIds } from '../../libs/fetch'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blog = await getBlogData(ctx.params.contentId as string)
  return {
    props: blog.blog,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllBlogIds()
  return {
    paths,
    fallback: false,
  }
}

const BlogDetail: React.FC<Blog> = (props) => {
  const { title, body, thumbnail } = props
  return (
    <Layout title={title}>
      <article>
        <h1>{title}</h1>
        <Image
          src={thumbnail.url}
          width={thumbnail.width}
          height={thumbnail.height}
        />
        <section dangerouslySetInnerHTML={{ __html: body }} />
      </article>
    </Layout>
  )
}

export default BlogDetail
