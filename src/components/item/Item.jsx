import React from "react";
import PropTypes from "prop-types";
import "./item.css";

const Item = ({ url, title }) => {
  return (
    <div className="item">
      <div className="item-image">
        <img src={url} alt="" className="item-img" />
        <span data-testid="title-item" className="item-desc-span">
          {title}
        </span>
      </div>
    </div>
  );
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
