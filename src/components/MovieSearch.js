import axios from "axios";

export default function MovieSearch(name) {
  let films;
  try{
      const request =  axios.get(
        `https://swapi.dev/api/films/?search=${name}`
      );
      request.then((response) => (films = response.data.results));
      return films;

  } catch(e){
      console.log(e)
  }
}
