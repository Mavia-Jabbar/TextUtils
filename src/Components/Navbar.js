import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={props.modeStyle}>
      <div className="container-fluid" style={props.modeStyle}>
        {/* Brand */}
        <Link className="navbar-brand" to="/" style={props.modeStyle}>
          {props.title}
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: props.modeStyle.color }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: props.modeStyle.color }}
          ></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={props.modeStyle}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={props.modeStyle}>
                About
              </Link>
            </li>
          </ul>

          {/* Dark mode toggle */}
          <div
            className="form-check form-switch text-nowrap"
            onClick={props.modeButton}
          >
            <input
              className="form-check-input"
              id="checkNativeSwitch"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="checkNativeSwitch">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Set title here" };
