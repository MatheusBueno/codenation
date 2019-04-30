import React from 'react'
import PropTypes from 'prop-types'

import CommentsBlock from './CommentsBlock'

const RecipePage = ({ recipe, recipeSlug }) => (
  <div>
    {recipe && renderRecipe({ recipe })}

    <CommentsBlock recipeSlug={recipeSlug} />
  </div>
)

const renderRecipe = ({ recipe }) => {
  return (
    <React.Fragment>
      <img className="img-fluid" src={recipe ? recipe.thumbnail : "https://via.placeholder.com/350x300"} alt="Recipe thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{recipe && recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>{recipe && recipe.ingredients}
        </p>
      </div>
    </React.Fragment>
  );
}

RecipePage.propTypes = {
  recipe: PropTypes.object
}

export default RecipePage
