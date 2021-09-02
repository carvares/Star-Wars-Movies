import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { MovieBackground, Opening, Loader, Error } from "../styles/MovieStyles";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaEmpire } from "react-icons/fa";
import LoadingGif from "../assets/Loader.gif";
import ErrorGif from "../assets/404.gif";

export default function MoviePage() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(false);
  const [people1, setPeople1] = useState(false);
  const [people2, setPeople2] = useState(false);
  const [people3, setPeople3] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/${id}`)
      .then((response) => setMovieInfo(response.data))
      .catch(() => setMovieInfo("error"));
  }, [id]);

  useEffect(() => {
    if (movieInfo && movieInfo !== "error") {
      axios
        .get(movieInfo.characters[0])
        .then((response) => setPeople1([response.data.name]))
        .catch(()=>setPeople1(true))
      axios
        .get(movieInfo.characters[1])
        .then((response) => setPeople2([response.data.name]))
        .catch(()=>setPeople2(true))
      axios
        .get(movieInfo.characters[2])
        .then((response) => setPeople3([response.data.name]))
        .catch(()=>setPeople3(true))
    }
  }, [movieInfo]);

  if ((!people1 || !people2 || !people3) && movieInfo !== "error") {
    return <Loader src={LoadingGif} />;
  }

  return (
    <MovieBackground>
      
      <Link to="/">
        <img src={Logo} alt="SW Logo" />
      </Link>
      {movieInfo === "error" ? (
        <Error>
          <h1>404: Not found</h1> <img src={ErrorGif} alt="404 gif" />
        </Error>
      ) : (
        <>
          <ul>
            <h1>
              Title: <p>{movieInfo.title}</p>
            </h1>
            <li>
              Episode: <p>{movieInfo.episode_id}</p>
            </li>
            <li>
              Director: <p>{movieInfo.director}</p>
            </li>
            <li>
              Producer: <p>{movieInfo.producer}</p>
            </li>
            <li>
              Release Date: <p>{movieInfo.release_date}</p>
            </li>
            <li>
              Characters:
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
            <h1>Opening crawl:</h1> <p>{movieInfo.opening_crawl}</p>
          </Opening>
        </>
      )}
      <Link to="/">
        <div>
          <FaEmpire />
          <h1>voltar</h1>
        </div>
      </Link>
    </MovieBackground>
  );
}
