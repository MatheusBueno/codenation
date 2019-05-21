/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../components/Nav/Nav";

class DetailsPage extends Component {
  state = {};

  componentDidMount() {
    //use localStorage
  }

  componentWillUnmount() {
    //use localStorage newName for characters
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>Hero Name</h1>
        <p> Hero Description</p>
        <h4>Series</h4>
        <ul>Series</ul>
      </div>
    );
  }
}

export default DetailsPage;
