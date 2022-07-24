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
    data: null
  }

  // waht is this doing
  handleOnSearchSubmit(term) {
    console.log(term)
  }

  async onSearchSubmit(term) {
    const response = await axios.get(call_config.url, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${call_config.acess_key}`
      }
    }).then((res) => {
      console.log(res.data.results)
      this.setState({ data: res.data })
    })
  }

  render() {
    // const handleTermInput = (e) => {
    //   this.setState({ term: e.target.value })
    // }
    console.log(this.state.data)
    return (
      <SearchBar onSubmit={this.onSearchSubmit} />
    );
  }
}

export default FetchImages;