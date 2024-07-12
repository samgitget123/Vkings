import React from 'react'
import chai from '../images/chailogo.jpeg';
import rishis from '../images/rishiskitchen.jpeg';
import vr from '../images/vr.jpeg';
import logo from '../images/vkingslogo.jpeg';
const Gallery = () => {
  return (
    <div className ='gallery'>
      <div className="container-fluid">
        <div className="row">
        <div className='col-12 d-flex justify-content-center'>
            <h4 className='text-center fw-bold heading-with-border'>What we offer</h4>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4  d-flex justify-content-center">
            <div className="card" style={{ width: '100%' }}>
              <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-center">"Experience the thrill of sports at our versatile Cricket and Football Ground. Our unique setup allows players to enjoy both box cricket and football, catering to diverse sporting interests. Whether you're honing your cricketing skills or showcasing your football finesse, our well-equipped grounds provide the perfect arena for competitive matches and friendly games alike."</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '100%' }}>
              <img src={chai} className="card-img-top" alt="..."/>
                <div className="card-body ">
                  <p className="card-text text-center">"Experience the finest blends at our Tea Stall, where tradition meets taste. Enjoy a refreshing cup of tea, Additionally, enjoy a selection of drinks and cigarettes, catering to your relaxation needs."</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '100%' }}>
              <img src={vr} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-center">"Step into the future with our VR Gaming zone, where immersive experiences transport you to fantastical worlds. Engage in thrilling adventures and cutting-edge games that offer an unparalleled level of excitement and realism."</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '100%' }}>
              <img src={rishis} className="card-img-top" alt="chai"/>
                <div className="card-body">
                  <p className="card-text text-center">"Indulge in a culinary journey at our Food Stall, where a variety of mouth-watering dishes await. From local delicacies to street favorites, satisfy your cravings with freshly prepared kebabs that delight the senses."</p>
                </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Gallery