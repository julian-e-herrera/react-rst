import styled from 'styled-components'
import breakpoint from './breakpoints'
const Login = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: flex;

  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
  }
`

export default Login
