import React from "react";
import Header from "./components/Header.js";
import  WelcomePage from './components/WelcomePage.js';
import  CharacterList  from './components/CharacterList.js';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <main>
      <div>
     <div>
      <div className="App">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <div>
          <Link to="/">Welcome Page</Link>
        </div>
        <div>
          <Link to="/CharacterList">Character List</Link>
        </div>
      </div>
    </div>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/CharacterList" component={CharacterList} />
 
  </div>
      <Header />
    </main>
  );
}
