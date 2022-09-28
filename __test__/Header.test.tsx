import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { initTestHelpers, getPage } from 'next-page-tester'
import Home from '../pages'

initTestHelpers()

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
  it('ナビゲーションバーのBLOGリンクからBlogページへと遷移する', async () => {
    const { page } = await getPage({ route: '/index' })
    render(page)
    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
  })
})
