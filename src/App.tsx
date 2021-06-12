import React from "react";
import { Route, Switch } from "react-router";
import Header from "./components/App/Header";
import SignInForm from "./components/auth/SignIn";
import SignUpForm from "./components/auth/SignUp";
import Browser from "./components/Browser";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/signin'>
          <SignInForm />
        </Route>
        <Route path='/signup'>
          <SignUpForm />
        </Route>
        <Route path='/browse'>
          <Browser />
        </Route>
      </Switch>
    </>
  );
}

export default App;
