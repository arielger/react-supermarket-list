import React from "react";
import PropTypes from "prop-types";
import SupermarketItem from "../SupermarketItem";
import "./SupermarketList.css";
import Spinner from "../Spinner";

const SupermarketList = ({ list, handleItemDelete, isLoading }) => {
  const isEmpty = !list.length;

  if (isLoading) {
    return (
      <div className="supermarket-list__placeholder">
        <Spinner />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="supermarket-list__placeholder">
        <span className="supermarket-list__empty-message">List is empty</span>
      </div>
    );
  }

  return (
    <ul className="supermarket-list">
      {list.map(item => (
        <SupermarketItem
          key={item.id}
          text={item.text}
          handleDelete={() => {
            handleItemDelete(item.id);
          }}
          isLoading={item.isLoading}
        />
      ))}
    </ul>
  );
};

SupermarketList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isLoading: PropTypes.bool
    }).isRequired
  ).isRequired,
  handleItemDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default SupermarketList;
