import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    term: "",
  };

  // handleOnInputChange(e) {
  //   console.log(e.target.value)
  // }
  // make this as arrow function to prevent term is not defined error
  handleOnFormSubmit = e => {
    e.preventDefault();
    onSubmit: PropTypes.any
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui input focus">
        <form onSubmit={this.handleOnFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              onChange={e => this.setState({ term: e.target.value })}
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
