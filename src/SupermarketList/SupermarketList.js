import React from "react";
import PropTypes from "prop-types";
import SupermarketItem from "../SupermarketItem";
import "./SupermarketList.css";

const SupermarketList = ({ list, handleItemDelete }) => {
  return (
    <ul className="supermarket-list">
      {list.map(item => (
        <SupermarketItem
          key={item.id}
          text={item.text}
          handleDelete={() => {
            handleItemDelete(item.id);
          }}
        />
      ))}
    </ul>
  );
};

SupermarketList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  handleItemDelete: PropTypes.func.isRequired
};

export default SupermarketList;
