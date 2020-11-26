import { render, screen } from '@testing-library/react'
import App from '../App'
import React from 'react'
import { estateAxios } from '../config/axios'
import { estate } from '../__mocks__/estate'
import store from '../store'
import { Provider } from 'react-redux'

const mockAxios = estateAxios
test('main app<App/>', () => {})
test('main call app<App/>', async () => {
  mockAxios.get = jest.fn().mockResolvedValue({
    data: estate,
  })
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const list = screen.findAllByTestId('property')
  expect(await list).toHaveLength(10)

  expect(mockAxios.get).toHaveBeenCalled()
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})
test('main text app<App/>', () => {
  render(<App />)
  const linkElement = screen.getByText(/Real Estate Test/)
  expect(linkElement).toBeInTheDocument()
  expect(screen.getByTestId('title').tagName).toBe('H1')
})
