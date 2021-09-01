import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { MovieBackground, Opening } from "../styles/MovieStyles";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaEmpire } from "react-icons/fa";
export default function MoviePage() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(false);
  const [people1, setPeople1] = useState("");
  const [people2, setPeople2] = useState("");
  const [people3, setPeople3] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/${id}`)
      .then((response) => setMovieInfo(response.data));
  }, [id]);

  useEffect(() => {
    if (movieInfo) {
      axios
        .get(movieInfo.characters[0])
        .then((response) => setPeople1([response.data.name]));
      axios
        .get(movieInfo.characters[1])
        .then((response) => setPeople2([response.data.name]));
      axios
        .get(movieInfo.characters[2])
        .then((response) => setPeople3([response.data.name]));
    }
  }, [movieInfo]);

  console.log(people1, people2, people3);
  return (
    <MovieBackground>
      <Link to="/">
        <div>
          <FaEmpire />
          <h1>voltar</h1>
        </div>
      </Link>
      <Link to="/">
        <img src={Logo} alt="SW Logo" />
      </Link>
      <ul>
        <h1>
          Título: <p>{movieInfo.title}</p>
        </h1>
        <li>
          Episódio: <p>{movieInfo.episode_id}</p>
        </li>
        <li>
          Diretor: <p>{movieInfo.director}</p>
        </li>
        <li>
          Produtores: <p>{movieInfo.producer}</p>
        </li>
        <li>
          Lançamento: <p>{movieInfo.release_date}</p>
        </li>
        <li>
          Personagens:
          <li>
            <p>{people1}</p>
          </li>
          <li>
            <p>{people2}</p>
          </li>
          <li>
            <p>{people3}</p>
          </li>
        </li>
      </ul>
      <Opening>
        <h1>Texto de abertura:</h1> <p>{movieInfo.opening_crawl}</p>
      </Opening>
    </MovieBackground>
  );
}