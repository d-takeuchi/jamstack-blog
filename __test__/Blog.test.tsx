import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import { rest } from 'msw'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import type { Blog } from '../types/type'

initTestHelpers()
