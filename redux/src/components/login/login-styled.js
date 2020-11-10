import styled from 'styled-components'

const NewUserlogin = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1%;
  display: flex;
  justify-items: center;
  text-align: center;
  font-family: 'Montserrat', Verdana, Geneva, Tahoma, serif;

  form {
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
  select,
  input {
    justify-content: center;
    align-items: flex-start;
    background: transparent;
    border: none;
    text-decoration: underline;
    margin-left: auto;
    text-decoration-thickness: initial;
  }
`

export default NewUserlogin
