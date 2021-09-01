import { Background } from "../styles/HomeStyles";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import { DebounceInput } from "react-debounce-input";
import getResult from "./GetResult";

export default function Home() {
  const [searchPeople, setSearchPeople] = useState(false);
  const [searchList, setSearchList] = useState([]);

  

  console.log(searchList);
  return (
    <Background searchPeople={searchPeople}>
      <img src={Logo} alt="SW Logo" />
      <form>
        <input
          type="text"
          placeholder={searchPeople ? "Procurar personagem" : "Procurar filme"}
          onChange={async(event) => {
            event.target.value.length > 2
              ? setSearchList(await getResult(searchPeople,event.target.value))
              : setSearchList([]);
          }}
        />
        <span>
          {searchPeople ? (
            <BsPeopleCircle onClick={() => setSearchPeople(!searchPeople)} />
          ) : (
            <MdLocalMovies onClick={() => setSearchPeople(!searchPeople)} />
          )}
          <button>Procurar</button>
        </span>
      </form>
      <ul>
        {searchList.map((currentItem) => {
          return <li>{searchPeople?currentItem.name:currentItem.title}</li>;
        })}
      </ul>
    </Background>
  );
}
