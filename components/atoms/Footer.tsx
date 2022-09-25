import { css } from '@emotion/react'

const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`

const footer = css`
  background: #432;
  text-align: center;
  padding: 26px 0;
  margin-top: 50px;
  p {
    color: #fff;
    font-size: 0.875rem;
  }
`

export const Footer: React.FC = () => {
  return (
    <footer css={footer}>
      <div css={wrapper}>
        <p>
          <small>&copy; 2022 d-takeuchi Blog</small>
        </p>
      </div>
    </footer>
  )
}
