import { render, screen } from '@testing-library/react'
import App from '../App'
import Home from '../components/home'
import React from 'react'
import { estateAxios } from '../config/axios'
//import { estate } from '../__mocks__/estate'
import store from '../store'
import { Provider } from 'react-redux'
import Property from '../components/property/property'

jest.mock('../config/axios')
jest.mock('../__mocks__/estate')
//import { users } from '../__mocks__/user'

test('main app<App/>', () => {})

const axios = estateAxios
const Properties = require('../__mocks__/estate')

///console.log(axios)//?
test('should fetch properties', async () => {
  const props = Properties
  const resp = { data: props }
  await axios.get.mockResolvedValue(resp)
  //console.log(axios.get.mockResolvedValue(resp))
  axios.get.mockImplementation(() => Promise.resolve(resp))

  expect(resp.data).toEqual(props)
})

//const mockAxios = estateAxios

test('main call app<App/>', async () => {
  // axios.get = jest.fn().mockResolvedValue({
  //   data: Properties,
  // })
  const props = Properties.data
  const resp = { data: props }
  await axios.get.mockResolvedValue({ data: props })
  await axios.get.mockImplementation(() => Promise.resolve(resp))
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  // const list = screen.findAllByTestId('property')
  // expect(await list).toHaveLength(10)

  expect(axios.get).toHaveBeenCalled()
  expect(axios.get).toHaveBeenCalledTimes(1)
})
test('main text app<App/>', () => {
  render(<App />)
  const linkElement = screen.getByText(/Real Estate Test/)
  expect(linkElement).toBeInTheDocument()
  expect(screen.getByTestId('title').tagName).toBe('H1')
})
