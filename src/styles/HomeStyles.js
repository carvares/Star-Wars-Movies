import styled from "styled-components";

export const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 450px;
    height: auto;
    margin: 20vh 0 50px 0;
    @media(max-width:400px){
        width: 80vw;
        margin:10vh 0;
      }
  }
  form {
    width: 570px;
    background-color: #555;
    border-radius: 30px;
    display: flex;
    align-items: center;
    @media(max-width:400px){
        width: 95vw;
      }
  }
  input {
    width: 450px;
    height: 40px;
    border: none;
    border-radius: 30px;
    box-shadow: ${(props) =>props.saber?
      props.searchPeople
        ? "-1px 1px 5px 4px rgba(26, 185, 236, 0.75)"
        : "-1px 1px 5px 4px rgba(255, 61, 61, 0.75)": ""};
    padding: 0 10px;
    background-color: white;
    font-family: "Roboto";
    font-size: 15px;
    outline: none;
    :hover{
      box-shadow: ${(props) =>props.saber?
      props.searchPeople
        ? "-1px 1px 5px 9px rgba(26, 185, 236, 0.75)"
        : "-1px 1px 5px 9px rgba(255, 61, 61, 0.75)": ""};
    }
    @media(max-width:400px){
      width: 70vw;
    }
  }
  span {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 35px;
    color: white;
    background-image: ${(props) =>
      props.searchPeople
        ? "linear-gradient(45deg, #11347a, #1ab9ec)"
        : "linear-gradient(45deg, #921010,#FF3D3D)"};
    padding: 5px;
    margin: 0 5px;
    border-radius: 50px;
    cursor: pointer;
  }
  button {
    width: 35px;
    height: 35px;
    border: none;
    color: white;
    background-image: linear-gradient(45deg, #0EC81F ,#2EF140);
    border-radius: 50px;
    font-family: "Roboto";
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }
  li {
    font-family: "roboto";
    width: 570px;
    height: 30px;
    background-color: white;
    padding: 10px 5px;
    @media(max-width:400px){
      width: 90vw;
      height: 40px;
    }
  }
`;
