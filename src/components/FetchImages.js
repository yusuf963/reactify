import React from 'react';
import axios from 'axios';

const call_config = {
  url: 'https://api.unsplash.com/search/photos',
  acess_key: 'tdJmdo0XwlxZqcfU1d6BSmNrwwPbHaUab7Zi0XXYsKc'

}


class FetchImages extends React.Component {
  state = {
    term: null,
    data: null
  }

  onSearchSubmit(term) {
    axios.get(call_config.url, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${call_config.acess_key}`
      }
    }
    )
  }

  render() {
    // const handleTermInput = (e) => {
    //   this.setState({ term: e.target.value })
    // }
    console.log(this.state.data)
    return (
      <div onSubmit={this.onSearchSubmit} class="ui input focus">
        <input type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default FetchImages;