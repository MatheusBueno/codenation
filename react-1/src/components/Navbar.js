import React from "react";

import PropTypes from "prop-types";
import logo from "../logo.svg";

const Navbar = ({ searchString, handleSearch }) => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div className="navbar-brand col-1">
      <img src={logo} className="Navbar-logo" alt="logo" />
    </div>

    <div className="form-group justify-content-center row col-10 my-2">
      <input
        value={searchString}
        // TODO: onChange deve atualizar a URL
        onChange={handleSearch}
        className="form-control col-9 mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  </nav>
);

Navbar.propTypes = {
  searchString: PropTypes.string
};

export default Navbar;
