import React from 'react'
import chai from '../images/chailogo.jpeg';
import rishis from '../images/rishiskitchen.jpeg';
import vr from '../images/vr.jpeg';
import vkings from '../images/vkingslogo.jpeg';
import crickfoot from '../images/add.jpeg';
const Gallery = () => {
  return (
    <div className ='gallery'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2 d-flex justify-content-center">
            <h4 className='text-center'>What we have</h4>
          </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4  d-flex justify-content-center">
            <div className="card" style={{ width: '75%' }}>
              <img src={crickfoot} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '75%' }}>
              <img src={chai} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '75%' }}>
              <img src={rishis} className="card-img-top" alt="chai"/>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '75%' }}>
              <img src={vr} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Gallery