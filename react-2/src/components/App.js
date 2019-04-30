import React, { Component } from "react";
import { Route, Redirect, withRouter, matchPath } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import Login from "./Login";
import User from "./User";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import { isLogged } from "../services/loginService";

const HomeRoute = ({ match }) => <Home
  searchString={match.params.searchString}
  recipes={recipes.results}
/>;

const HomeRouteWithParams = ({ match }) => (
  <Home
    searchString={match.params.searchString}
    recipes={recipes.results}
  />
);

const LoginRoute = () => <Login />;
const ProfileRoute = () => <User />;
const RecipePageRoute = ({ match }) => (
  <RecipePage
    recipe={
      recipes.results.filter(
        recipe => slugify(recipe.title) === match.params.recipeSlug
      )[0]
    }
    recipeSlug={match.params.recipeSlug}
  />
);

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
  handleSearch = event => {
    const { history } = this.props;
    history.push(event.target.value);
  };

  render() {
    const { pathname } = this.props.location;
    const match = matchPath(pathname, { path: "/:searchString", exact: true });

    return (
      <div className="App">
        <Navbar searchString={match ? match.params.searchString : ""} handleSearch={this.handleSearch} />

        <div className="container mt-10">
          <Route path="/recipe/:recipeSlug" component={RecipePageRoute} />
          <OnlyNotAuthenticate path="/user/login" component={LoginRoute} />
          <OnlyAuthenticate path="/user/profile" component={ProfileRoute} />
          <Route exact path="/" render={HomeRoute} />
          <Route
            exact
            path="/:searchString"
            render={HomeRouteWithParams}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
