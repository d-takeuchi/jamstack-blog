import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'd-takeuchi',
  apiKey: process.env.API_KEY,
})
