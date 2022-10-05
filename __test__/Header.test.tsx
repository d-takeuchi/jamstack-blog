/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { initTestHelpers, getPage } from 'next-page-tester'
import { render, screen, cleanup } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

initTestHelpers()

const handlers = [
  rest.get(`${process.env.API_ENDPOINT}/blog`, (req, res, ctx) => {
    return res(
      ctx.set({
        'X-MICROCMS-API-KEY': process.env.API_KEY,
      }),
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'hoge',
          body: 'aiueo',
        },
      ])
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
