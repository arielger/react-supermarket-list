import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import LoadingScreen from "../LoadingScreen";
import "./Modal.css";

class Modal extends Component {
  handleClick = event => {
    // If the user is clicking outside the modal content, close the modal
    if (!event.target.closest(".modal__content")) {
      this.props.handleClose();
    }
  };

  handleKeyDown = event => {
    if (event.key === "Escape") {
      this.props.handleClose();
    }
  };

  render() {
    const { isLoading, children } = this.props;

    return (
      <Fragment>
        <div
          className="modal__overlay"
          tabIndex="-1"
          onKeyDown={this.handleKeyDown}
          onClick={this.handleClick}
        >
          <div className="modal__content" aria-modal="true">
            <LoadingScreen isLoading={isLoading}>{children}</LoadingScreen>
          </div>
        </div>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
