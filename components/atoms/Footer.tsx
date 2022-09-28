import { css } from '@emotion/react'
import { AiFillGithub } from 'react-icons/ai'

const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`

const footer = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #432;
  text-align: center;
  padding: 26px 0;
  margin-top: 50px;
  p {
    color: #fff;
    font-size: 0.875rem;
  }
`

const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const iconStyle = css`
  color: white;
  font-size: 2rem;
  margin: 0 10px;
`

export const Footer: React.FC = () => {
  return (
    <footer css={footer}>
      <div css={[wrapper, flexBox]}>
        <p>
          <small>&copy; 2022 d-takeuchi Blog</small>
        </p>
        <div>
          <a href='https://github.com/d-takeuchi' target={'_blank'}>
            <AiFillGithub css={iconStyle} />
          </a>
        </div>
      </div>
    </footer>
  )
}
