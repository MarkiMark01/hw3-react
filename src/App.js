import React, { Component } from 'react';
import './App.css';
import ModalWindow from "./components/Modal/Modal";
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {

  state = {
    showModal: false,
    searchText: '',
    selectedImageURL: null,
  }

  // Метод для встановлення URL великого зображення
  setSelectedImageURL = (url) => {
    this.setState({ selectedImageURL: url });
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  }

  render() {

    const { showModal, selectedImageURL } = this.state;

    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery
          searchText={this.state.searchText}
          onImageClick={this.setSelectedImageURL}
        />
        {showModal && (
          <ModalWindow onClose={this.toggleModal} >
            <img src={selectedImageURL} alt='Describe items' />
          </ModalWindow>
        )};
      </div>
    );
  }
};

export default App;
