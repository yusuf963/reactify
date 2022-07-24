import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    const { description, urls } = this.props.image
    return (
      <div>
        <img
          src={urls.small}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;