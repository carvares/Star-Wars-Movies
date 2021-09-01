import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { PeopleBackground } from "../styles/PeopleStyles";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaRebel } from "react-icons/fa";

export default function PeoplePage() {
  const { id } = useParams();
  const [peopleInfo, setPeopleInfo] = useState(false);
  const [movie1, setMovie1] = useState("");
  const [movie2, setMovie2] = useState("");
  const [movie3, setMovie3] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => setPeopleInfo(response.data));
      console.log(peopleInfo)
  }, [id]);

  useEffect(() => {
    if (peopleInfo) {
      axios
        .get(peopleInfo.films[0])
        .then((response) => setMovie1([response.data.title]));
      axios
        .get(peopleInfo.films[1])
        .then((response) => setMovie2([response.data.title]));
      axios
        .get(peopleInfo.films[2])
        .then((response) => setMovie3([response.data.title]));
    }
  }, [peopleInfo]);


  return (
    <PeopleBackground>
      <Link to="/">
        <div>
          <FaRebel />
          <h1>voltar</h1>
        </div>
      </Link>
      <Link to="/">
        <img src={Logo} alt="SW Logo" />
      </Link>
      <ul>
        <h1>
          Name: <p>{peopleInfo.name}</p>
        </h1>
        <li>
          Height: <p>{peopleInfo.height}</p>
        </li>
        <li>
          Mass: <p>{peopleInfo.mass}</p>
        </li>
        <li>
          Hair Color: <p>{peopleInfo.hair_color}</p>
        </li>
        <li>
          Eye color: <p>{peopleInfo.eye_color}</p>
        </li>
        <li>
          Birth year: <p>{peopleInfo.birth_year}</p>
        </li>
        <li>
          Gender: <p>{peopleInfo.gender}</p>
        </li>
        <li>
          movies:
          <li>
            <p>{movie1}</p>
          </li>
          <li>
            <p>{movie2}</p>
          </li>
          <li>
            <p>{movie3}</p>
          </li>
        </li>
      </ul>
    </PeopleBackground>
  );
}
