import { Background } from "../styles/HomeStyles";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";

export default function Home() {
  const [searchPeople, setSearchPeople] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (searchPeople) {
      const request = axios.get(
        `https://swapi.dev/api/people/?search=${searchValue}`
      );
      request.then((response) => setSearchList(response.data.results));
    } else {
      const request = axios.get(
        `https://swapi.dev/api/films/?search=${searchValue}`
      );
      request.then((response) => setSearchList(response.data.results));
    }
  }, [searchValue]);

  console.log(searchList);
  return (
    <Background searchPeople={searchPeople}>
      <img src={Logo} />
      <form>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          type="text"
          placeholder={searchPeople ? "Procurar personagem" : "Procurar filme"}
          onChange={(event) => {
            event.target.value.length > 2
              ? setSearchValue(event.target.value)
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
