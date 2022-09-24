import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('初期描画時に「Hello World」と描画される', () => {
    render(<Home />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
