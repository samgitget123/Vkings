import React, { useState } from 'react';
import image1 from '../images/chailogo.jpeg';
import image2 from '../images/rishiskitchen.jpeg';
import image3 from '../images/vr.jpeg';
const Collections = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1, image2, image3]; // Add more images to this array

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        {images.map((image, index) => (
          <div className='col-4 mb-4' key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className='img-thumbnail gallery-image'
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className='overlay' onClick={handleClose}>
          <div className='overlay-content'>
            <img src={selectedImage} alt='Selected' className='img-fluid' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
