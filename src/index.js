import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';


function App(){
  return(
    <BrowserRouter>
    <GlobalStyles/>
    {/* <Header/> */}
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


