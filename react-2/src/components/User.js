import React from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../services/loginService";

const singout = (event, history) => {
  logout();
  history.push("/");
  event.preventDefault();
};

const User = withRouter(({ history }) => (
  <button className="btn" onClick={e => singout(e, history)}>
    Logout
  </button>
));

export default User;
