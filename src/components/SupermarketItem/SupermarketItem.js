import React from "react";
import PropTypes from "prop-types";
import "./SupermarketItem.css";
import Spinner from "../Spinner";
import TrashIcon from "./TrashIcon";

const SupermarketItem = ({ text, handleDelete, isLoading }) => {
  return (
    <li className="supermarket-item">
      <h2 className="supermarket-item__text">{text}</h2>
      <button className="supermarket-item__button" onClick={handleDelete}>
        {isLoading ? <Spinner size="small" /> : <TrashIcon />}
      </button>
    </li>
  );
};

SupermarketItem.defaultProps = {
  isLoading: false
};

SupermarketItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default SupermarketItem;
