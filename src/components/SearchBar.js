import React, { Component } from 'react';
import {useState} from "react"
class SearchBar extends Component {
  state = {
    term: ""
  }

  // handleOnInputChange(e) {
  //   console.log(e.target.value)
  // }
  // make this as arro function to prevent term is not defind error  
  handleOnFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui input focus">
        <form onSubmit={this.handleOnFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              placeholder="Search..."
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;