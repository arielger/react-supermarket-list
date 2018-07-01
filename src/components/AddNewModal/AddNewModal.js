import React, { Component } from "react";
import Modal from "../Modal";
import PropTypes from "prop-types";
import "./AddNewModal.css";
/* eslint-disable react/jsx-no-duplicate-props */

class AddNewModal extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const {
      isLoading,
      itemText,
      handleSubmit,
      handleClose,
      handleTextChange
    } = this.props;

    return (
      <Modal handleClose={handleClose} isLoading={isLoading}>
        <form className="add-new-modal__form" onSubmit={handleSubmit}>
          <h3 className="add-new-modal__title">Add item</h3>
          <div className="add-new-modal__form-group">
            <input
              className="add-new-modal__input"
              type="text"
              name="item"
              value={itemText}
              onChange={handleTextChange}
              ref={this.inputRef}
            />
          </div>
          <div className="add-new-modal__buttons">
            <button
              type="button"
              onClick={handleClose}
              className="add-new-modal__btn add-new-modal__cancel-btn"
            >
              Cancel
            </button>
            <button
              className="add-new-modal__btn add-new-modal__submit-btn"
              type="submit"
              disabled={!itemText}
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
  isLoading: PropTypes.bool.isRequired,
  itemText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default AddNewModal;
