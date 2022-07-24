import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ""
  }
  handleOnInputChange(e) {
    console.log(e.target.value)

  }
  render() {
    return (
      <div class="ui input focus">
        <form className='ui form'>
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