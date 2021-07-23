import React from "react";
import { Link, Redirect } from "react-router-dom";

import routes from "../constants/routes";
import { isAuthenticated } from "../api/auth";

import "../App.css";

function Layout({ children }) {
  if (isAuthenticated())
    return (
      <>
        <header>
          <div className="header">
            <Link to={routes.PROFILE}>
              <img
                src={"https://picsum.photos/200/200"}
                width="60px"
                height="60px"
                className="tiny-pic"
                alt="profile"
              />
            </Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to={routes.PROFILE}>
                      خانه
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={routes.ALL_RANKS}>
                      <i className="bx bxs-star bx-flashing bx-rotate-180"></i>
                      برترین ها
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={routes.RANKS}>
                      ده نفر برتر پایه
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </>
    );
  else return <Redirect to={routes.LOGIN} />;
}

export default Layout;
