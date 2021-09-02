import styled from "styled-components";

export const PeopleBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
  div {
    position: fixed;
    left: 5vw;
    top: 3vh;

    SVG {
      width: 3vw;
      height: auto;
      color: white;
      background-image: linear-gradient(45deg, #11347a, #1ab9ec);
      border-radius: 50px;
      :hover {
        box-shadow: 0px 0px 5px 2px rgba(255, 61, 61, 0.75);
      }
      @media (max-width: 1000px) {
        display: none;
      }
    }
    @media (max-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      position: static;
      margin: 0 0 30px 0;
      background-image: linear-gradient(45deg, #11347a, #1ab9ec);
      width: 80px;
      height: 40px;
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
    @media (max-width: 1000px) {
      position: static;
      margin: 20px 0;
    }
  }
  ul {
    width: 20%;
    @media (max-width: 1000px) {
      width: 70vw;
      text-align: center;
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
`;
