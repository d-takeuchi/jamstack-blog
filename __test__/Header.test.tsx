/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { initTestHelpers, getPage } from 'next-page-tester'
import { render, screen, cleanup } from '@testing-library/react'
import { ResponseComposition, rest } from 'msw'
import { setupServer } from 'msw/node'
import type { Blog } from '../types/type'

initTestHelpers()

interface Response {
  contents: Blog[]
}
const handlers = [
  rest.get(
    `${process.env.RESTAPI_URL}/blog`,
    (req, res: ResponseComposition<Response>, ctx) => {
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
              thumbnail: {
                url: 'http://hogehoge.com',
                width: 100,
                height: 10,
              },
            },
            {
              id: 'hogehoge2',
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

describe('Header', () => {
  it('ロゴクリックでTOPページへと遷移する', async () => {
    const { page } = await getPage({ route: '/index' })
    render(page)
    userEvent.click(screen.getByTestId('logo'))
    expect(await screen.findByText('Hello World')).toBeInTheDocument()
  })
  it('ナビゲーションバーのTOPリンクからHomeページへと遷移する', async () => {
    const { page } = await getPage({ route: '/index' })
    render(page)
    userEvent.click(screen.getByTestId('top-nav'))
    expect(await screen.findByText('Hello World')).toBeInTheDocument()
  })
  it('ナビゲーションバーのABOUTリンクからABOUTページへと遷移する', async () => {
    const { page } = await getPage({ route: '/index' })
    render(page)
    userEvent.click(screen.getByTestId('about-nav'))
    expect(await screen.findByText('about page')).toBeInTheDocument()
  })
  /**
   * @jest-environment node
   */
  // it('ナビゲーションバーのBLOGリンクからBlogページへと遷移する', async () => {
  //   const { page } = await getPage({ route: '/index' })
  //   render(page)
  //   userEvent.click(screen.getByTestId('blog-nav'))
  //   expect(await screen.findByText('blog page')).toBeInTheDocument()
  // })
})
