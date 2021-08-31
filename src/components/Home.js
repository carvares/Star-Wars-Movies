import { Background } from "../styles/HomeStyles";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";

export default function Home() {
  const [searchPeople, setSearchPeople] = useState(false);

  return (
    <Background searchPeople={searchPeople}>
      <img src={Logo} />
      <form>
        <input
          placeholder={searchPeople ? "Buscar personagem" : "Buscar filme"}
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
    </Background>
  );
}
