import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { PeopleBackground, Loader, Error } from "../styles/PeopleStyles";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaRebel } from "react-icons/fa";
import LoadingGif from "../assets/Loader.gif";
import ErrorGif from "../assets/404.gif";

export default function PeoplePage() {
  const { id } = useParams();
  const [peopleInfo, setPeopleInfo] = useState(false);
  const [movie1, setMovie1] = useState(false);
  const [movie2, setMovie2] = useState(false);
  const [movie3, setMovie3] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => setPeopleInfo(response.data))
      .catch(() => setPeopleInfo("error"));
  }, [id]);

  useEffect(() => {
    if (peopleInfo && peopleInfo !== "error") {
      axios
        .get(peopleInfo.films[0])
        .then((response) => setMovie1([response.data.title]))
        .catch(()=> setMovie1(true))
      axios
        .get(peopleInfo.films[1])
        .then((response) => setMovie2([response.data.title]))
        .catch(()=> setMovie2(true))
      axios
        .get(peopleInfo.films[2])
        .then((response) => setMovie3([response.data.title]))
        .catch(()=> setMovie3(true))
    }
  }, [peopleInfo]);
  console.log(movie1, movie2, movie3)
  if ((!movie1 || !movie2 || !movie3) && peopleInfo !== "error") {
    return <Loader src={LoadingGif} />;
  }

  return (
    <PeopleBackground>
      
      <Link to="/">
        <img src={Logo} alt="SW Logo" />
      </Link>
      {peopleInfo === "error" ? (
        <Error>
          <h1>404: Not found</h1> <img src={ErrorGif} alt="404 gif" />
        </Error>
      ) : (
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
      )}
      <Link to="/">
        <div>
          <FaRebel />
          <h1>voltar</h1>
        </div>
      </Link>
    </PeopleBackground>
  );
}
