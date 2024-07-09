import React from 'react'
import Carousel from './Carousel'
import Gallery from './Gallery'
import Bookings from './Bookings'

const Home = () => {
  return (
    <div className='home-container'>
      <section>
        <div className='CarouselBox'>
          <Carousel />
        </div>
        <div className='my-4'>
          <Gallery />
        </div>
        <div>
          <Bookings />
        </div>
      </section>
    </div>
  )
}

export default Home;
