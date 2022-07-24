import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image.urls.small}
          alt={this.props.image.description}
        />

      </div>
    );
  }
}

export default ImageCard;