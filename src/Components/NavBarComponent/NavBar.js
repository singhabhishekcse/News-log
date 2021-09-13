import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h2 className="logo-text mx-2"> News Log</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "floralwhite" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/general"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-font"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white text-font" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              {/* <form className = "d-flex">
                                <input className = "form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className = "btn btn-outline-success" type="submit">Search</button>
                       </form> */}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
