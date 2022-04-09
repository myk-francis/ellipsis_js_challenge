import React from "react";
import "./content.css";
import placeholder from "../../assets/placeholder.svg";
import placeholderSeries from "../../assets/placeholderSeries.svg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="listitem-container">
      <div className="lc-item-container">
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <div className="item" data-testid="movieslink">
            <div className="item-image">
              <img src={placeholder} alt="" className="item-img" />
              <span className="item-desc-span">{"Popular Movies"}</span>
            </div>
          </div>
        </Link>
        <Link to="/series" style={{ textDecoration: "none" }}>
          <div className="item">
            <div className="item-image">
              <img
                src={placeholderSeries}
                alt="something"
                className="item-img"
              />
              <span className="item-desc-span">{"Popular Series"}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Content;
