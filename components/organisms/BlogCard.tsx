import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Blog as Props } from '../../types/type'

export const BlogCard: React.FC<Props> = ({ id, title, thumbnail }) => {
  return (
    <li css={cardStyle}>
      <Link href={`/blog/${id}`}>
        <div>
          <h3 css={cardTitle}>{title}</h3>
          <figure css={thumbnailStyle}>
            <Image
              src={thumbnail.url}
              width={thumbnail.width}
              height={thumbnail.height}
            />
          </figure>
        </div>
      </Link>
    </li>
  )
}

const cardStyle = css`
  list-style: none;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
  margin: 20px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`
const cardTitle = css`
  font-size: 1.25rem;
  text-align: center;
`
const thumbnailStyle = css``
