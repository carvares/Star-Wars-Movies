import { HomeBackground } from "../styles/HomeStyles";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import getResult from "./GetResult";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchPeople, setSearchPeople] = useState(false);
  const [searchList, setSearchList] = useState([]);

  

  console.log(searchList);
  return (
    <HomeBackground searchPeople={searchPeople}>
      <img src={Logo} alt="SW Logo" />
      <form>
        <input
          type="text"
          placeholder={searchPeople ? "Search character" : "Search film"}
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
          <button>Search</button>
        </span>
      </form>
      <ul>
        {searchList.map((currentItem) => {
          return <Link to={searchPeople?`people/${currentItem.url.slice(29)}`:`movie/${currentItem.url.slice(28)}`}><li>{searchPeople?currentItem.name:currentItem.title}</li></Link>;
        })}
      </ul>
    </HomeBackground>
  );
}
