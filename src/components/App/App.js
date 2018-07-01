import React, { Component } from "react";
import shortid from "shortid";
import SupermarketList from "../SupermarketList";
import AddNewModal from "../AddNewModal";
import * as api from "../../api";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    isListLoading: false,
    modalText: "",
    isModalOpen: false,
    isModalLoading: false
  };

  componentDidMount() {
    this.updateItemsList();
  }

  updateItemsList() {
    this.setState({
      isListLoading: true
    });

    api
      .getItems()
      .then(list => {
        this.setState({
          isListLoading: false,
          list
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  openAddNewModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeAddNewModal = () => {
    this.setState({
      isModalOpen: false,
      modalText: ""
    });
  };

  handleModalTextChange = e => {
    const maxTextLength = 50;
    this.setState({ modalText: e.target.value.substring(0, maxTextLength) });
  };

  handleItemAdd = event => {
    event.preventDefault();

    this.setState({ isModalLoading: true });

    const newItem = {
      text: this.state.modalText.trim(),
      id: shortid.generate()
    };

    api
      .createItem(newItem)
      .then(item => {
        this.setState(prevState => ({
          isModalOpen: false,
          isModalLoading: false,
          modalText: "",
          list: prevState.list.concat(item)
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleItemDelete = id => {
    this.setState(oldState => ({
      list: oldState.list.map(
        item => (item.id === id ? { ...item, isLoading: true } : item)
      )
    }));
    api.deleteItem(id).then(item => {
      this.setState(oldState => ({
        list: oldState.list.filter(i => i.id !== item.id)
      }));
    });
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
          isLoading={this.state.isListLoading}
          list={this.state.list}
          handleItemDelete={this.handleItemDelete}
        />
        <button onClick={this.openAddNewModal} className="add-item-btn">
          Add item
        </button>
        {this.state.isModalOpen && (
          <AddNewModal
            isLoading={this.state.isModalLoading}
            itemText={this.state.modalText}
            handleSubmit={this.handleItemAdd}
            handleClose={this.closeAddNewModal}
            handleTextChange={this.handleModalTextChange}
          />
        )}
      </div>
    );
  }
}

export default App;
