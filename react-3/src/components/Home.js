import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName } from "../services/recipes";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      recipes: []
    };
  }

  componentDidMount() {
    this.getRecipePage(1);
  }

  getRecipePage(page) {
    const { searchString } = this.props;

    getRecipesByName(searchString, page)
      .then(({ data }) => {
        console.log(data.results);
        this.setState({ recipes: data.results, page: page });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        <div className="row">{this.renderRecipes()}</div>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button
                  id="prev"
                  className="page-link"
                  onClick={() => this.getRecipePage(page - 1)}
                >
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button
                  id="next"
                  className="page-link"
                  onClick={() => this.getRecipePage(page + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  renderRecipes() {
    const { searchString } = this.props;
    const { recipes } = this.state;

    return recipes.map((recipe, key) => (
      <RecipeItem key={key} recipe={recipe} higlightText={searchString} />
    ));
  }
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
