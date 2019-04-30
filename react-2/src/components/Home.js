import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'


const Home = ({ recipes = [], searchString = "" }) => (
  <div className="row">
    {renderRecipesList(recipes, searchString)}
  </div>
);

const renderRecipesList = (recipes, searchString) => {
  const recipesFiltered = recipes
    .filter(
      recipe =>
        recipe.title.toLowerCase().includes(searchString) ||
        recipe.ingredients.toLowerCase().includes(searchString)
    );

  return (
    recipesFiltered.map((recipe, key) => (
      <RecipeItem key={key} recipe={recipe} higlightText={searchString} />
    ))
  );
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
}

export default Home
