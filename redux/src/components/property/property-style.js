import styled from 'styled-components'
export const Card = styled.div.attrs((props) => ({
  image: `url("${props.image}")`,
}))`
  background-image: ${(props) => props.image};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`
export const Text = styled.div`
  width: 60%;
  padding: 50px;
  overflowy: hidden;
  font-family: 'Montserrat', Verdana, Geneva, Tahoma, serif;
  a {
    text-decoration: none;
    color: black;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  background: white;
  boxshadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)';
`
