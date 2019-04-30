import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isLogged, getUser } from "../services/loginService";
import commentsService from "../services/commentsService";

class CommentsBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.getComments(),
      comment: ""
    };
  }

  getComments = () => commentsService.get(this.props.recipeSlug);

  handleInsertInput = event => {
    const comment = event.target.value;
    this.setState({ comment: comment });
  };

  handleRemoveComment = (e, comment) => {
    if (!isLogged() || getUser().username !== comment.author) {
      alert(
        "Você só pode remover os seus comentários, verifique se está logado!"
      );
      return;
    }
    const { recipeSlug } = this.props;

    try {
      commentsService.delete(recipeSlug, comment);
      this.setState({ comments: this.getComments() });
    } catch (error) {
      alert(error);
    }

    e.preventDefault();
  };

  createComment = event => {
    if (!isLogged()) {
      alert("Somente usuários logados podem comentar");
      this.setState({ comment: "" });
      return;
    }
    const { comment } = this.state;
    const { recipeSlug } = this.props;

    try {
      commentsService.insert(recipeSlug, { comment });
      this.setState({ comment: "", comments: this.getComments() });
    } catch (error) {
      alert(error);
    }

    event.preventDefault();
  };

  render() {
    return (
      <div className="text-left">
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">Comments </h6>

          {this.renderRecipeList()}
        </div>

        {this.renderRecipeInsert()}
      </div>
    );
  }

  renderRecipeList = () => {
    const { comments } = this.state;
    return (
      comments.length > 0 &&
      comments.map((comment, key) => this.renderComment(comment, key))
    );
  };

  renderComment = (comment, key) => (
    <div key={key} className="Comment media text-muted pt-3">
      <FontAwesomeIcon className="mr-2" size="3x" icon="user-circle" />
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">@{comment.author}</strong>
        {comment.comment}
      </p>

      {this.renderTrashIcon({ comment })}
    </div>
  );

  renderTrashIcon = ({ comment }) => {
    return (
      <FontAwesomeIcon
        icon="trash"
        onClick={e => this.handleRemoveComment(e, comment)}
      />
    );
  };

  renderRecipeInsert = () => {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Comment </label>
          <textarea
            disabled={false}
            value={this.state.comment}
            onChange={this.handleInsertInput}
            required="required"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Insert your comment here"
          />
        </div>
        <button
          disabled={false}
          onClick={this.createComment}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  };
}

export default CommentsBlock;
