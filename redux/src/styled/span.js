import styled from 'styled-components'

const Span = styled.span`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  font-family: $theme-span;
  overflow: hidden;
  word-wrap: break-word;

  &:hover {
    display: flex;
  }
`

export default Span
