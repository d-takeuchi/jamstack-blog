/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, screen } from '@testing-library/react'
import { ResponseComposition, rest } from 'msw'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import type { Blog } from '../types/type'

initTestHelpers()

interface GetAllBlogDataResponse {
  contents: Blog[]
}

const handlers = [
  rest.get(
    `${process.env.RESTAPI_URL}/blog`,
    (req, res: ResponseComposition<GetAllBlogDataResponse>, ctx) => {
      return res(
        ctx.set({
          'X-MICROCMS-API-KEY': process.env.API_KEY,
        }),
        ctx.status(200),
        ctx.json({
          contents: [
            {
              id: 'fugafuga',
              createdAt: '2022-09-20T22:48:13.140Z',
              updatedAt: '2022-09-20T22:48:13.140Z',
              publishedAt: '2022-09-20T22:48:13.140Z',
              revisedAt: '2022-09-20T22:48:13.140Z',
              title: 'テストタイトル1',
              body: '<h2 id="h48034554a9">こんにちは、初めてのブログです</h2><h3 id="h09e49f209e">Next.js + microCMSによるJamstackl構成のブログです</h3>',
              thumbnail: {
                url: 'http://hogehoge.com',
                width: 100,
                height: 10,
              },
            },
            {
              id: 'hogehoge',
              createdAt: '2022-09-20T22:48:13.140Z',
              updatedAt: '2022-09-20T22:48:13.140Z',
              publishedAt: '2022-09-20T22:48:13.140Z',
              revisedAt: '2022-09-20T22:48:13.140Z',
              title: 'テストタイトル2',
              body: '<h2 id="h48034554a9">こんにちは、初めてのブログです</h2><h3 id="h09e49f209e">Next.js + microCMSによるJamstackl構成のブログです</h3>',
              thumbnail: {
                url: 'http://hogehoge.com',
                width: 100,
                height: 10,
              },
            },
          ],
        })
      )
    }
  ),
  rest.get(
    `${process.env.RESTAPI_URL}/blog/hogehoge`,
    (req, res: ResponseComposition<Blog>, ctx) => {
      return res(
        ctx.set({
          'X-MICROCMS-API-KEY': process.env.API_KEY,
        }),
        ctx.status(200),
        ctx.json({
          id: 'hogehoge',
          createdAt: '2022-09-20T22:48:13.140Z',
          updatedAt: '2022-09-20T22:48:13.140Z',
          publishedAt: '2022-09-20T22:48:13.140Z',
          revisedAt: '2022-09-20T22:48:13.140Z',
          title: 'テストタイトル',
          body: '<h2 id="h48034554a9">こんにちは、初めてのブログです</h2><h3 id="h09e49f209e">Next.js + microCMSによるJamstackl構成のブログです</h3>',
          thumbnail: {
            url: 'http://hogehoge.com',
            width: 100,
            height: 10,
          },
        })
      )
    }
  ),
]
const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe(`ブログ詳細ページ`, () => {
  it('投稿データ ID:hogehogeのデータが表示される', async () => {
    const { page } = await getPage({
      route: '/blog/hogehoge',
    })
    render(page)
    expect(await screen.findByText('テストタイトル')).toBeInTheDocument()
    expect(
      screen.getByText('こんにちは、初めてのブログです')
    ).toBeInTheDocument()
  })
})
