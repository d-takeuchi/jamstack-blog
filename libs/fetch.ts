import { Blog } from '../types/type'
import fetch from 'node-fetch'

export const getAllBlogIds = async () => {
  const res = await fetch(new URL(`${process.env.API_ENDPOINT}/blog`), {
    method: 'GET',
    headers: {
      'X-MICROCMS-API-KEY': process.env.API_KEY,
    },
  })

  const blog = await res.json()

  return blog.data.contents.map((blog) => {
    return {
      params: {
        contentId: String(blog.id),
      },
    }
  })
}

export const getAllBlogData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/blog`),
    {
      method: 'GET',
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY,
      },
    }
  )

  const blog = await res.json()
  return {
    blog: blog.contents,
  }
}
export const getBlogData = async (contentId: string) => {
  const res = await fetch(
    new URL(`${process.env.API_ENDPOINT}/blog/${contentId}`),
    {
      method: 'GET',
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY,
      },
    }
  )

  const blog = await res.json()

  return {
    blog: JSON.parse(JSON.stringify(blog.data)) as Blog,
  }
}
