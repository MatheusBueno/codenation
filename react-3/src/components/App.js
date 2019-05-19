import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import recipes from "../sample_data/recipes.json";
import { slugify } from "../helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const HomeRoute = ({ match }) => (
      <Home
        searchString={match.params.searchString}
        recipes={recipes.results}
      />
    );

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

    return (
      <div className="App">
        <Route
          exact
          path="/search/:searchString?"
          children={({ match }) => (
            <Navbar
              searchString={match ? match.params.searchString || "" : ""}
            />
          )}
        />

        <div className="container mt-10">
          <Switch>
            <Route exact path="/recipe" component={RecipePageRoute} />
            <Route path="/search/:searchString?" component={HomeRoute} />
            <Redirect to="/search" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
