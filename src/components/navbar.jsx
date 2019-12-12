import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - RENDERED");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
