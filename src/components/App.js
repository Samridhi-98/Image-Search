import React, { useState } from 'react';

import SearchBar from './SearchBar'
import ImageList from './ImageList';

import Services from "../services";

function App() {
  const [images, setImages] = useState([])

  const onSearchSubmit = async (term) => setImages(await Services.getPhotos(term))

  return (
    <div
      className="ui container"
      style={{ marginTop: '20px' }}
    >
      <SearchBar onSubmit={ onSearchSubmit }/>
      Found: { images.length } images
      <ImageList images={ images }/>
    </div>
  );
}

export default App