import React, { Component } from "react";
import shortid from "shortid";
import SupermarketList from "../SupermarketList";
import AddNewModal from "../AddNewModal";
import * as api from "../../api";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    isAddNewModalOpen: false
  };

  componentDidMount() {
    this.updateItemsList();
  }

  updateItemsList() {
    api
      .getItems()
      .then(list => {
        this.setState({ list });
      })
      .catch(error => {
        console.error(error);
      });
  }

  openAddNewModal = () => {
    this.setState({ isAddNewModalOpen: true });
  };

  closeAddNewModal = () => {
    this.setState({ isAddNewModalOpen: false });
  };

  addNewItem = text => {
    const newItem = {
      text,
      id: shortid.generate()
    };

    this.setState(oldState => ({
      list: oldState.list.concat(newItem)
    }));
    api.createItem(newItem).then(() => {
      this.closeAddNewModal();
      this.updateItemsList();
    });
  };

  handleItemDelete = id => {
    this.setState(oldState => ({
      list: oldState.list.filter(i => i.id !== id)
    }));
    api.deleteItem(id);
  };

  render() {
    const listLength = this.state.list.length;

    return (
      <div className="app">
        <h1 className="app__title">Supermarket List</h1>
        <span className="app__list-count">
          {listLength > 0
            ? `${listLength} item${listLength > 1 ? "s" : ""}`
            : "No items"}
        </span>
        <SupermarketList
          list={this.state.list}
          handleItemDelete={this.handleItemDelete}
        />
        <button onClick={this.openAddNewModal} className="add-item-btn">
          Add item
        </button>
        <AddNewModal
          isOpen={this.state.isAddNewModalOpen}
          handleSubmit={this.addNewItem}
          handleClose={this.closeAddNewModal}
        />
      </div>
    );
  }
}

export default App;