import React from "react";
// import PropTypes from 'prop-types'
import "./header.css";

const Header = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <div className="navbar-title-left">
          <span className="navbar-title-span">DEMO Streaming</span>
        </div>
        <div className="navbar-title-right">
          <div className="n-t-r-login">
            <span className="ntr-login">Log in</span>
          </div>
          <div className="n-t-r-trial">
            <span className="ntr-trial">Start your free trial</span>
          </div>
        </div>
      </div>
      <div className="navbar-subtitle">
        <span className="n-s-subtitle">Popular Movies</span>
      </div>
    </div>
  );
};

// NavBar.propTypes = {}

export default Header;
