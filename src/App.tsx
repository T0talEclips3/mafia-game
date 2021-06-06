import React from "react";
import { Route } from "react-router";
import Header from "./components/Header";
import SignInForm from "./components/forms/SignInForm";
import SignUpForm from "./components/forms/SignUpForm";
import GameBrowser from "./components/GameBrowser";
import Game from "./components/Game";

function App() {
  return (
    <div>
      <Header />
      <Route path='/signin'>
        <SignInForm />
      </Route>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
      <Route path='/browse'>
        <GameBrowser />
      </Route>
      <Route path='/game'>
        <Game />
      </Route>
    </div>
  );
}

export default App;
