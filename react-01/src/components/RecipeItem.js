import React from "react";
import { Link } from "react-router-dom";

import { slugify } from "../helpers";

const handleHighlightText = (text, higlight) => {
  if (!higlight || higlight === "") return text;

  // Regex that separate a array with higlight and normal text.
  const partsWithHiglight = text.split(new RegExp(`(${higlight})`, "gi"));

  return partsWithHiglight.map((text, key) =>
    text.toLowerCase() === higlight ? <mark key={key}>{text}</mark> : text
  );
};

const RecipeItem = ({ recipe, higlightText }) => (
  <div className="col-sm-3 mt-4">
    {recipe && (
      <Link
        to={{ pathname: `/recipe/${slugify(recipe.title)}`, recipe: recipe }}
      >
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src={
              recipe ? recipe.thumbnail : "https://via.placeholder.com/350x300"
            }
            alt="Recipe thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">
              {recipe && handleHighlightText(recipe.title, higlightText)}
            </h5>
            <p className="card-text">
              <strong>Ingredients: </strong>
              {recipe && handleHighlightText(recipe.ingredients, higlightText)}
            </p>
          </div>
        </div>
      </Link>
    )}
  </div>
);

export default RecipeItem;
