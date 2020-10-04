import './ImageList.css';

import React from 'react';
import ImageCard from './ImageCard';

function ImageList(props) {
  const { images } = props

  const imageMap = images.map(image => (
    <ImageCard key={ image.id } image={ image }/>
  ))

  return (
    <div className="image-list">
      { imageMap }
    </div>
  )
};

export default ImageList;