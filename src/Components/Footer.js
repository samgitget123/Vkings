import React from 'react';

const Footer = () => {
  return (
    <footer className='footer bg-warning'>
     <div className='text-center text-dark'>
            &copy; {new Date().getFullYear()} Designed by Upsilon Studio.
          </div>
    </footer>
  )
}

export default Footer;
