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
      justify-content: center;
      opacity: 1;
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 1s;
    }
  
    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  button {
    align-self: flex-end;
  }
  
`

export default Header
