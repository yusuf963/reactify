import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class FetchImages extends React.Component {
  state = {
    term: null,
    images: [],
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });

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
  };

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
