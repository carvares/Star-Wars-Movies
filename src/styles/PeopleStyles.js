import styled from "styled-components";

export const PeopleBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: fixed;
    left: 5vw;
    top: 3vh;
    SVG {
      width:3vw;
      height: auto;
      color: white;
      background-image: linear-gradient(45deg, #11347a, #1ab9ec);
      border-radius: 50px;
      :hover{
          box-shadow: 0px 0px 5px 2px rgba(26, 185, 236, 0.75);
      }
    }
  }
  a {
    position: fixed;
    top: 3vh;
    img {
      width: 200px;
      height: auto;
    }
  }
  ul {
    width: 20%;
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
