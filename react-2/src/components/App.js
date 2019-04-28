import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import Login from "./Login";
import User from "./User";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import { isLogged } from "../services/loginService";

const HomeRoute = ({ match }) => <Home recipes={[]} searchString="" />;
const LoginRoute = () => <Login />;
const ProfileRoute = () => <User />;
const RecipePageRoute = () => <RecipePage recipes={recipes[0]} />;

const OnlyAuthenticate = ({ component: Component, ...rest }) => (
  <Route
    exact
    {...rest}
    render={({ props }) =>
      isLogged() ? <Component {...props} /> : <Redirect to={"/"} />
    }
  />
);

const OnlyNotAuthenticate = ({ component: Component, ...rest }) => (
  <Route
    exact
    {...rest}
    render={({ props }) =>
      !isLogged() ? <Component {...props} /> : <Redirect to={"/"} />
    }
  />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar searchString="" />

        <div className="container mt-10">
          <Route path="/recipe/recipe" component={RecipePageRoute} />
          <OnlyNotAuthenticate path="/user/login" component={LoginRoute} />
          <OnlyAuthenticate path="/user/profile" component={ProfileRoute} />
          <Route exact path="/" component={HomeRoute} />
        </div>
      </div>
    );
  }
}

export default App;
