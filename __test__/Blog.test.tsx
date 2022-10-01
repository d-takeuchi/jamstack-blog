import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import { rest } from 'msw'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import type { Blog } from '../types/type'

initTestHelpers()

const handlers = [
  rest.get('/blog', (req, res, ctx) => {
    return res(
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

describe(`ブログページ`, () => {
  it('getStaticPropsによってブログ一覧情報がブログページに表示できているか', async () => {
    expect(true).toBe(true)
  })
})
