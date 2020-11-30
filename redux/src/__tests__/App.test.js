import { render, screen } from '@testing-library/react'
import App from '../App'
import React from 'react'
import axios from 'axios'
import { estate } from '../__mocks__/estate'
test('from pass', () => {})

const est = jest.mock('../__mocks__/estate', jest.requireActual('../__mocks__/estate'))
const mockAxios = axios

test('main app', async () => {
  mockAxios.get = jest.fn().mockResolvedValue({
    data: estate,
  })

  render(<App />)
  const linkElement = screen.getByText(/Real Estate Test/)
  expect(linkElement).toBeInTheDocument()
  expect(screen.getByTestId('title').tagName).toBe('H1')
  expect(screen.getByText('Real Estate Test')).toBeInTheDocument()
  const list = screen.findAllByTestId('property')
  expect(await list).toHaveLength(10)
})
