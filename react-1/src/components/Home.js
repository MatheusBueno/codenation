import React from "react";

import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => (
  <div className="row">
    {recipes
      .filter(
        recipe =>
          recipe.title.toLowerCase().includes(searchString) ||
          recipe.ingredients.toLowerCase().includes(searchString)
      )
      .map((recipe, key) => (
        <RecipeItem key={key} recipe={recipe} higlightText={searchString} />
      ))}
  </div>
);

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
