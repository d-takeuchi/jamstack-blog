import { GetStaticProps, NextPage } from 'next'

import { Layout } from '../components/Layout'
import { getAllBlogData } from '../libs/fetch'
import { BlogCard } from '../components/organisms/BlogCard'
import type { Blog as BlogType } from '../types/type'
import { css } from '@emotion/react'

interface StaticProps {
  blog: BlogType[]
}

const Blog: NextPage<StaticProps> = ({ blog }) => {
  return (
    <Layout title='ブログ'>
      <h1>BLOG</h1>
      <ul css={cardList}>
        {blog.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blog = await getAllBlogData()

  return {
    props: { ...blog },
  }
}
export default Blog

const cardList = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
`
