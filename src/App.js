import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Bookings from './Components/Bookings';
import Navbar from './Components/Navbar';
import Prefooter from './Components/Prefooter';
import Footer from './Components/Footer';
import Collections from './Components/Collections';
import './Style.css';

const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/Collections" element={<Collections />} />
          </Routes>
        </div>
        <Prefooter/>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
