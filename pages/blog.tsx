import { Layout } from '../components/Layout'
import { GetStaticProps, NextPage } from 'next'
import type { Blog as BlogType } from '../types/type'
import { getAllBlogData } from '../libs/fetch'
import Link from 'next/link'

interface StaticProps {
  blog: BlogType[]
}

const Blog: NextPage<StaticProps> = ({ blog }) => {
  return (
    <Layout title='ブログ'>
      <p>blog page</p>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
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
