import React, { Component } from 'react';

const ImageList = (props) => {
  const images = props.images.map((image, index) => {
    return (
      <img
        key={index}
        src={image.urls.small}
        alt="any"
      />
    )
  })
  return (
    <div>
      {images}

    </div>
  )
}

export default ImageList;