import React from 'react'
import { render, screen } from '@testing-library/react'
import { clientAxios } from '../config/axios'
import Login from '../components/login/login'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../store'
jest.mock('../config/axios')
jest.mock('../__mocks__/user')
//import { users } from '../__mocks__/user'

test('main app<App/>', () => {})

const axios = clientAxios
const Users = require('../config/axios')

test('should fetch users', async () => {
  const users = await Users.users
  const resp = { data: users }
  await axios.get.mockResolvedValue(resp)
  //console.log(resp.data)
  // or you could use the following depending on your use case:
  axios.get.mockImplementation(() => Promise.resolve(resp))

  expect(resp.data).toEqual(users)
})

const handleSubmit = jest.fn()
test('<Login/> login', () => {
  render(
    <Provider store={store}>
      <Login onClick={handleSubmit} />
    </Provider>
  )

  //  check why repeat

  userEvent.type(screen.getByTestId('username'), 'julian')
  userEvent.type(screen.getByTestId('password'), 'admin')

  //const btnSingin = screen.getByTestId('btn-sing-in')
})
const mockAxios = clientAxios

test('main call search user<login/>', async () => {
  mockAxios.get = jest.fn().mockResolvedValue({
    data: Users.users,
  })
  render(
    <Provider store={store}>
      <Login onClick={handleSubmit} />
    </Provider>
  )
  //   const list = screen.findAllByTestId('property')
  //   expect(await list).toHaveLength(10)

  expect(await mockAxios.get).toHaveBeenCalled()
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})
