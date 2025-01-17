import React from 'react';
import turf from '../images/turf.jpeg';
import slide1 from '../images/vkings1bc.jpeg';
import arena from '../images/arena.jpeg';
import add from '../images/add.jpeg';

const Carousel = () => {
    return (
        <div className='carousel-container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={add} className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5><strong>Vkings sportz Arena</strong></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={turf} className="d-block w-100" alt="Slide 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5><strong>Vkings sportz Arena</strong></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide1} className="d-block w-100" alt="Slide 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5><strong>Vkings sportz Arena</strong></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={arena} className="d-block w-100" alt="Slide 4" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5><strong>Vkings sportz Arena</strong></h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
