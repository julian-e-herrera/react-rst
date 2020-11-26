import styled from 'styled-components'
export const Container = styled.div`
   {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
    padding: 1rem;
    z-index: 0;
  }
  ,
  @media screen and (min-width: 1224px) {
    grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`
export const Card_container = styled.div`
   {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 229, 229);
    bottom: 0px;
    min-height: 476px;
    position: relative;
    padding-bottom: 0px;
    z-index: 0;
    max-width: 334px;
    min-width: 334px;
  }
  a,
  li,
  a:hover {
    text-decoration: none;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`
export const Card_topLink = styled.a`
  a:hover {
    text-decoration: none;
  }
`
export const Card_imageContains = styled.div.attrs((props) => ({
  image: `src("${props.image}")`,
}))`
   {
    background-image: ${(props) => props.image};
    background-size: cover;
    background-position: center;
    height: 12.31rem;
    width: 100%;
    background-color: rgb(229, 229, 229);
  }
  ::after,
  ::before {
    box-sizing: border-box;
  }
`
export const Img_card = styled.img.attrs((props) => ({
  image: `"${props.image}"`,
}))`
  src: ${(props) => props.image};
  height: 12.31rem;
  width: 100%;
`
export const Card_styled = styled.div`
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
export const Card_street = styled.div`{
    color: rgb(0, 0, 0);
    font-family: "Chronicle Display";
    font-size: 21px;
    letter-spacing: 0.3px;
    line-height: 1.4;
    margin-bottom: 15px;`

export const Card_location = styled.div`
   {
    color: rgb(100, 100, 100);
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`
export const Card_propertyDetail = styled.ul`
   {
    color: rgb(100, 100, 100);
    display: flex;
    flex-flow: row wrap;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.3;
    text-transform: uppercase;
    list-style: none;
  }
  li {
    padding: 16px 0px 12px;

    li:not(:last-child)::after {
      border-right: 1px solid rgb(100, 100, 100);
      margin: 0px 5px;
      content: '';
    }
  }
  li:not(:last-child)::after {
    border-right: 1px solid rgb(100, 100, 100);
    margin: 0px 5px;
    content: '';
  }
`

export const Title = styled.div`
   {
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    display: flex;
    height: 24px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.2;
    position: absolute;
    text-transform: uppercase;
    z-index: 1;
    background-color: rgb(0, 0, 0);
    -webkit-box-pack: center;
    justify-content: center;
    width: 125px;
  }
`
export const Card_wrapper = styled.div`
   {
    padding: 20px 24px;
    background-color: rgb(255, 255, 255);
    height: auto;
    text-align: left;
  }
`

export const Card_bottom = styled.div`
   {
    -webkit-box-align: baseline;
    align-items: baseline;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid rgb(229, 229, 229);
    bottom: 0px;
    display: flex;
    height: auto;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 16px 24px;
    position: absolute;
    width: 100%;
    text-align: left;
  }
`

export const Card_img = styled.div.attrs((props) => ({
  image: `url("${props.image}")`,
}))`
  background-image: ${(props) => props.image};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`
