import React from 'react';
import unsplash from '../api/unsplash'
import ImageList from './fetchApp/ImageList'
import SearchBar from "./SearchBar"

class FetchImages extends React.Component {
  state = {
    term: null,
    images: []
  }

  // waht is this doing
  handleOnSearchSubmit(term) {
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    })
    this.setState({ images: response.data.results })
    //  try fetch in the future and bench mark betwwen fext vs axios
    //1. fetch is less size tahn axios
    //2. you can make better usability with axios with less code
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
        <ImageList images={this.state.images} />

      </div>
    );
  }
}

export default FetchImages;