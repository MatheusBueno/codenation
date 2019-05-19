import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import RecipeItem from "./RecipeItem";
import { getRecipesByIngredients } from "../services/recipes";

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        thumbnail: "",
        title: "",
        ingredients: ""
      },
      recipes: []
    };
  }

  componentDidMount() {
    const { recipe } = this.props.location;
    if (!recipe) {
      this.props.history.push("/search");
      return;
    }

    this.setState({ recipe });
    getRecipesByIngredients(recipe.ingredients, 1)
      .then(({ data }) => {
        this.setState({ recipes: data.results });
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { thumbnail, title, ingredients } = this.state.recipe;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
          <h5 className="card-title">Similar recipes</h5>
          <div className="row">{this.renderRecipes()}</div>
        </div>
      </div>
    );
  }

  renderRecipes() {
    const { searchString } = this.props;
    const { recipes } = this.state;

    return recipes
      .slice(0, 4)
      .map((recipe, key) => (
        <RecipeItem key={key} recipe={recipe} higlightText={searchString} />
      ));
  }
}

export default withRouter(RecipePage);
