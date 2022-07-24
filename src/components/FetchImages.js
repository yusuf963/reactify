import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar"

const call_config = {
  url: 'https://api.unsplash.com/search/photos',
  acess_key: 'tdJmdo0XwlxZqcfU1d6BSmNrwwPbHaUab7Zi0XXYsKc'
}
class FetchImages extends React.Component {
  state = {
    term: null,
    images: []
  }

  // waht is this doing
  handleOnSearchSubmit(term) {
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get(call_config.url, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${call_config.acess_key}`
      }
    })
    this.setState({ images: response.data.results })



    // fetch(call_config.url,
    //   {
    //     params: {
    //       query: term
    //     },
    //     headers: {
    //       Authorization: `Client-ID ${call_config.acess_key}`
    //     }
    //   }
    // ).then((res) => {
    //   console.log(res)
    // })
  }

  render() {
    // const handleTermInput = (e) => {
    //   this.setState({ term: e.target.value })
    // }
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found {this.state.images.length}</p>

      </div>
    );
  }
}

export default FetchImages;