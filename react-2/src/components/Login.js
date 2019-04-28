import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { register, login } from "../services/loginService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  loginUser = event => {
    const { username, password } = this.state;
    const { history } = this.props;

    console.log(event);

    try {
      login({ username, password });
      history.push("/");
    } catch (error) {
      alert(error);
    }

    event.preventDefault();
  };

  registerUser = event => {
    const { username, password } = this.state;

    try {
      register({ username, password });
      this.loginUser(event);
    } catch (error) {
      alert(error);
    }
    event.preventDefault();
  };

  render = () => (
    <form className="form-signin">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Login / Register</h1>
      </div>

      {this.renderUsernameInput()}

      {this.renderPasswordInput()}

      <div className="mt-5">
        <button
          className="login btn btn-lg btn-primary btn-block"
          onClick={this.loginUser}
          type="button"
        >
          Login
        </button>
        <button
          className="register btn btn-lg btn-secondary btn-block"
          onClick={this.registerUser}
          type="button"
        >
          Register
        </button>
      </div>
    </form>
  );

  renderUsernameInput = () => {
    const { username } = this.state;
    return (
      <div className="form-label-group">
        <label htmlFor="inputEmail">Username</label>
        <input
          name="username"
          onChange={e => this.handleUsername(e)}
          value={username}
          className="form-control"
          placeholder="Username"
          required
        />
      </div>
    );
  };

  renderPasswordInput = () => {
    const { password } = this.state;
    return (
      <div className="form-label-group mt-2">
        <label htmlFor="inputPassword">Password</label>
        <input
          name="password"
          onChange={e => this.handlePassword(e)}
          value={password}
          type="password"
          className="form-control"
          placeholder="Password"
          required
        />
      </div>
    );
  };
}

export default withRouter(Login);
