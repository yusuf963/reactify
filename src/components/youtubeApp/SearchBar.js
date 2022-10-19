import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ""
  }

  handleOnFormSubmit = (e) => {
    e.preventDefault()
    this.props.handleOnFormSubmit(this.state.term)
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