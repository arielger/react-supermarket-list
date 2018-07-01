import React from "react";
import PropTypes from "prop-types";
import "./Spinner.css";

const Spinner = ({ size }) => <div className={`spinner spinner--${size}`} />;

Spinner.defaultProps = {
  size: "medium"
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "medium"])
};

export default Spinner;
