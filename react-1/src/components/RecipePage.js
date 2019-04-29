import React from "react";
import PropTypes from "prop-types";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ location }) =>
  location ? (
    <div>
      <img
        className="card-img-top img-fluid"
        src={
          location
            ? location.recipe.thumbnail
            : "https://via.placeholder.com/350x300"
        }
        alt="Recipe thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">{location && location.recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {location && location.recipe.ingredients}
        </p>
      </div>
    </div>
  ) : (
    <h5>Recipe not found</h5>
  );

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
