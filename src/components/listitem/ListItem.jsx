import React from "react";
import PropTypes from "prop-types";
import "./listitem.css";
import Item from "../item/Item";

const ListItem = ({ entries, loading, errors }) => {
  if (errors) {
    return (
      <div className="listitem-container">
        <div className="lc-item-container">Oops, something went wrong</div>
      </div>
    );
  }

  return (
    <div className="listitem-container">
      <div className="lc-item-container">
        {!loading
          ? entries !== null &&
            entries.map((item, index) => (
              <Item
                title={item.title}
                url={item.images["Poster Art"].url}
                key={index}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  entries: PropTypes.array,
};

export default ListItem;
