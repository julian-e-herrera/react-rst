import styled from 'styled-components'
import Image from '../../img/build.jpg'
const Header = styled.div`
  background-size: cover;
  background-position: right bottom;
  min-height: 30vh;
  background-image: url(${Image});
  max-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: Avenir;
  font-weight: normal;
  text-shadow: 3px 2px rgb(49, 41, 41);
  a {
    text-decoration: none;
    color: white;
  }
`

export default Header
