import styled from "styled-components";

export const MovieBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:400px){
      flex-direction: column;
      justify-content: unset;
  }
  div {
    position: fixed;
    left: 5vw;
    top: 3vh;
    SVG {
      width: 3vw;
      height: auto;
      color: white;
      background-image: linear-gradient(45deg, #921010, #ff3d3d);
      border-radius: 50px;
      :hover {
        box-shadow: 0px 0px 5px 2px rgba(255, 61, 61, 0.75);
      }
      @media(max-width:400px){
        display: none;
      }
    }
    @media(max-width:400px){
        left: 2vw;
    }
  }
  a {
    position: fixed;
    top: 3vh;
    z-index: 3;
    & > img {
      width: 200px;
      height: auto;
    }
    @media(max-width:400px){
        position: static;
        margin: 20px 0;

    }
  }
  ul {
    width: 20%;
    @media(max-width:400px){
      width: 70vw;
  }
    
  }
  li,
  h1,
  h2 {
    text-shadow: 2px 2px black;
    color: white;
    font-family: "roboto";
    font-size: 20px;
    margin: 7px 0;
  }
  h1 {
    font-weight: bold;
  }
  p {
    color: yellow;
  }
`;
export const Opening = styled.span`
  font-family: "roboto";
  width: 20%;
  font-size: 24px;
  text-align: center;
  text-shadow: 2px 2px black;
  @media(max-width:400px){
      width: 70vw;
      font-size: 22px;
      padding: 0 0 50px 0;
  }
  
`;
export const Loader = styled.img`
  width: 100vw;
  height: 100vh;
  filter: brightness(0.5);
`;
export const Error = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50vw;
  }
  h1 {
    font-size: 30px;
  }
  @media(max-width:400px){
      img{
          width: 80vw;
      }
  }
`;
