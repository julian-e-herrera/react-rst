import { render, screen } from '@testing-library/react'
import App from '../App'
import React from 'react'

const createEstate = jest.fn()

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Real Estate Test/)
  expect(linkElement).toBeInTheDocument()
  expect(screen.getByTestId('title').tagName).toBe('H1')
  expect(screen.getByText('Real Estate Test')).toBeInTheDocument()
})
