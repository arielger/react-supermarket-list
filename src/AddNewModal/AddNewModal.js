import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./AddNewModal.css";
/* eslint-disable react/jsx-no-duplicate-props */

const maxTextLength = 50;

Modal.setAppElement("#root");

class AddNewModal extends Component {
  state = {
    newItemText: "",
    showError: false
  };

  focusInput = () => {
    this.inputNode.focus();
  };

  handleTextChange = e => {
    this.setState({ newItemText: e.target.value.substring(0, maxTextLength) });
  };

  resetItemText = () => {
    this.setState({ newItemText: "" });
  };

  handleModalClose = () => {
    this.resetItemText();
    this.props.handleClose();
  };

  hideErrorMessage = () => {
    this.setState({ showError: false });
  };

  handleModalSubmit = e => {
    e.preventDefault();

    if (!this.state.newItemText) {
      this.setState({ showError: true });
      setTimeout(this.hideErrorMessage, 2000);
      return;
    }

    this.props.handleSubmit(this.state.newItemText);
    this.handleModalClose();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onAfterOpen={this.focusInput}
        onRequestClose={this.handleModalClose}
        className="add-new-modal"
        overlayClassName="add-new-modal__overlay"
      >
        <form className="add-new-modal__form" onSubmit={this.handleModalSubmit}>
          <h3 className="add-new-modal__title">Add item</h3>
          <div className="add-new-modal__form-group">
            <input
              className="add-new-modal__input"
              type="text"
              value={this.state.newItemText}
              onChange={this.handleTextChange}
              ref={e => {
                this.inputNode = e;
              }}
            />
            <span
              style={{
                visibility: this.state.showError ? "visible" : "hidden"
              }}
              className="add-new-modal__error"
            >
              Add some text to add a new item.
            </span>
          </div>
          <div className="add-new-modal__buttons">
            <button
              type="button"
              onClick={this.handleModalClose}
              className="add-new-modal__btn add-new-modal__cancel-btn"
            >
              Cancel
            </button>
            <button
              className="add-new-modal__btn add-new-modal__submit-btn"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

AddNewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AddNewModal;
