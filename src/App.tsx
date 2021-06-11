import React from "react";
import { Route } from "react-router";
import Header from "./components/Header";
import SignInForm from "./components/auth/SignIn";
import SignUpForm from "./components/auth/SignUp";
import GameBrowser from "./components/GameBrowser";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
