import React from 'react'
import PropTypes from 'prop-types'
import CommentsBlock from './CommentsBlock'

const RecipePage = ({
    recipe
}) => (
    <div>
        <img className="img-fluid" src="https://via.placeholder.com/350x300" alt="" />
        <div className="card-body">
            <h5 className="card-title">TITLE HERE</h5>
            <p className="card-text">
                <strong>Ingredients: </strong>INGREDIENTS HERE
            </p>
        </div>
        <CommentsBlock />
    </div>
)

RecipePage.propTypes = {
    recipe: PropTypes.object
}

export default RecipePage
