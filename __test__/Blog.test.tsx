/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'

initTestHelpers()

const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/blog`, (req, res, ctx) => {
    return res(
      ctx.set({
        'X-MICROCMS-API-KEY': process.env.API_KEY,
      }),
      ctx.status(200),
      ctx.json({
        contents: [
          {
            id: 'fugafuga2',
            createdAt: '2022-09-20T22:48:13.140Z',
            updatedAt: '2022-09-20T22:48:13.140Z',
            publishedAt: '2022-09-20T22:48:13.140Z',
            revisedAt: '2022-09-20T22:48:13.140Z',
            title: 'テストタイトル1',
            body: '<h2 id="h48034554a9">こんにちは、初めてのブログです</h2><h3 id="h09e49f209e">Next.js + microCMSによるJamstackl構成のブログです</h3>',
          },
          {
            id: 'hogehoge2',
            createdAt: '2022-09-20T22:48:13.140Z',
            updatedAt: '2022-09-20T22:48:13.140Z',
            publishedAt: '2022-09-20T22:48:13.140Z',
            revisedAt: '2022-09-20T22:48:13.140Z',
            title: 'テストタイトル2',
            body: '<h2 id="h48034554a9">こんにちは、初めてのブログです</h2><h3 id="h09e49f209e">Next.js + microCMSによるJamstackl構成のブログです</h3>',
          },
        ],
      })
    )
  }),
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

describe(`ブログページ`, () => {
  it('getStaticPropsによってブログ一覧情報がブログページに表示できているか', async () => {
    const { page } = await getPage({
      route: '/blog',
    })
    render(page)
    expect(await screen.findByText('テストタイトル1')).toBeInTheDocument()
    expect(await screen.findByText('テストタイトル2')).toBeInTheDocument()
  })
})
