import React from "react";
import PropTypes from "prop-types";
import "./LoadingScreen.css";
import Spinner from "../Spinner";

const LoadingScreen = ({ isLoading, children }) => {
  if (!isLoading) return children;

  return (
    <div className="loading-screen">
      <div className="loading-screen__overlay">
        <Spinner />
      </div>
      {children}
    </div>
  );
};

LoadingScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default LoadingScreen;
