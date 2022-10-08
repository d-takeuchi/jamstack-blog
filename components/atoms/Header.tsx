import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'

const pageHeader = css`
  margin: 0 auto;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`
const logo = css`
  width: 210px;
  margin-top: 14px;
  border-radius: 50%;
`
const mainNav = css`
  display: flex;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-top: 34px;
  list-style: none;
  li {
    margin-left: 36px;
  }
  a {
    color: #fffffe;
    &:hover {
      color: #f9bc60;
    }
  }
`
const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`

export const Header: React.FC = () => {
  return (
    <>
      <header css={[pageHeader, wrapper]}>
        <h1>
          <Link href='/'>
            <a data-testid='logo'>
              <Image src='/logo.jpg' css={logo} width='60px' height='60px' />
            </a>
          </Link>
        </h1>
        <nav>
          <ul css={mainNav}>
            <li>
              <Link href='/'>
                <a data-testid='top-nav'>Top</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a data-testid='about-nav'>About</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a data-testid='blog-nav'>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
