import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import MoviePage from "./components/MoviePage.js";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MoviePage/>
        </Route>
        <Route path="/people/:id">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
