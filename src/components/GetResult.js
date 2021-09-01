import axios from "axios";

export default  function getResult (searchPeople,value) {
 return  axios.get(
    `https://swapi.dev/api/${searchPeople?'people':'films'}/?search=${value}`
  ).then((response) => (response.data.results));
}
