import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({
    recipes = [],
    searchString = ''
}) => (
    <div className="row">
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
    </div>
)

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
