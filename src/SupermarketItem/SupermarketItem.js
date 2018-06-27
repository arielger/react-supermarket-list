import React from "react";
import PropTypes from "prop-types";
import "./SupermarketItem.css";
import TrashIcon from "./TrashIcon";

const SupermarketItem = ({ text, handleDelete }) => {
  return (
    <li className="supermarket-item">
      <h2 className="supermarket-item__text">{text}</h2>
      <button className="supermarket-item__button" onClick={handleDelete}>
        <TrashIcon />
      </button>
    </li>
  );
};

SupermarketItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default SupermarketItem;
