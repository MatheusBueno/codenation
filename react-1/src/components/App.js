import React, { Component } from "react";
import { Switch, Route, withRouter, matchPath } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import recipes from "../sample_data/recipes.json";
import { slugify } from "../helpers";

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
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={match ? match.params.searchString : ""}
          handleSearch={this.handleSearch}
        />
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home recipes={recipes.results} />}
            />
            <Route
              exact
              path="/:searchString"
              render={({ match }) => (
                <Home
                  searchString={match.params.searchString}
                  recipes={recipes.results}
                />
              )}
            />
            <Route
              path="/recipe/:slug"
              render={({ match }) => (
                <RecipePage
                  recipe={
                    recipes.results.filter(
                      recipe => slugify(recipe.title) === match.params.slug
                    )[0]
                  }
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
