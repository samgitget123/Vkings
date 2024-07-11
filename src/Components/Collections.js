import React, { useState } from 'react';
import image1 from '../images/chailogo.jpeg';
import image2 from '../images/rishiskitchen.jpeg';
import image3 from '../images/vr.jpeg';

const Collections = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: 'Chai Logo' },
    { src: image2, alt: 'Rishi\'s Kitchen' },
    { src: image3, alt: 'VR Experience' },
  ]; // Add more images to this array

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
              src={image.src}
              alt={image.alt}
              className='img-thumbnail gallery-image'
              onClick={() => handleImageClick(image.src)}
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
