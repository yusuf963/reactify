import React, { Component } from 'react';
import youtubeApi from './apis/youtubeApi';
import SearchBar from './SearchBar'

class Youtube extends Component {
  state = {
    videos: []
  }
  onSearchSubmit = async (term) => {
    const response = await youtubeApi.get('/search/photos', {
      params: {
        q: 'car'
      }
    })
    this.setState({ videos: response.data })
  }
  onTermSubmit = (term) => {
    console.log(term)
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default Youtube;