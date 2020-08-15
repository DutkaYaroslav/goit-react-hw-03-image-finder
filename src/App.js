import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/searchBar/SearchBar";
import Modal from "./components/modal/Modal";
import ImageGallery from "./components/imageGalery/ImageGalery";
// import LoadMoreButton from "./components/loadmoreButton/LoadMoreButton";
import Spinner from "./components/spinner/Spinner";
import "./components/loadmoreButton/LoadMoreButton.css";

import imagesApi from "./services/imagesApi";

export default class App extends Component {
  state = {
    images: [],
    largeImageUrl: null,
    loading: false,
    searchQuery: "",
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fethImages();
    }
  }

  fethImages = () => {
    this.setState({ loading: true });

    imagesApi
      .fetchArticleWithQuery(this.state.searchQuery, this.state.page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState((state) => ({ largeImageUrl: !state.largeImageUrl }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handlelargeImageUrl = (bigUrl) => {
    this.setState({
      largeImageUrl: bigUrl,
    });
  };

  reutnrLargeImg = () => {
    return this.state.largeImageUrl;
  };

  render() {
    const { images, loading, largeImageUrl, error } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery
          images={images}
          modalF={this.handlelargeImageUrl}
        ></ImageGallery>

        {error && <h2>Whoops,something went wrong</h2>}
        {loading && <Spinner />}
        {largeImageUrl && (
          <Modal onClose={this.toggleModal} bigImg={this.reutnrLargeImg} />
        )}
        {images.length > 0 && (
          <button className="Button" type="button" onClick={this.fethImages}>
            load more
          </button>
        )}
      </>
    );
  }
}
