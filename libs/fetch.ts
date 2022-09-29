import { Blog } from '../types/type'
import { client } from './client'

interface getAllBlogResponse {
  contents: Blog[]
  totalCount: number
  offset: number
  limit: number
}

interface getBlogDataResponse {
  contents: Blog
}

export const getAllBlogIds = async () => {
  const res = await client.get<getAllBlogResponse>({
    endpoint: 'blog',
  })

  const blogs = res.contents

  return blogs.map((blog) => {
    return {
      params: {
        contentId: String(blog.id),
      },
    }
  })
}

export const getAllBlogData = async () => {
  const res = await client.get<getAllBlogResponse>({
    endpoint: 'blog',
  })

  return {
    blog: res.contents,
  }
}
export const getBlogData = async (contentId: string) => {
  const res = await client.get<getBlogDataResponse>({
    endpoint: 'blog',
    contentId,
  })

  return {
    blog: JSON.parse(JSON.stringify(res)) as Blog,
  }
}
