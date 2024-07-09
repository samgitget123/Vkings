import React from 'react'

const handleOnlineBooking = () => {
  // This is the custom URL scheme for your app
  const appUrl = 'yourapp://online-booking';
  
  // This is the fallback URL for the download page
  const fallbackUrl = 'https://playo.co/';

  const timeout = setTimeout(() => {
    window.location.href = fallbackUrl;
  }, 25);

  window.location.href = appUrl;

  // Clear the timeout if the app is opened
  window.addEventListener('blur', () => clearTimeout(timeout));
};

///offline
const handleCall = () => {
  // Replace with the phone number you want to call
  const phoneNumber = 'tel:+918247061367';
  window.open(phoneNumber, '_blank');
};

const handleWhatsApp = () => {
  // Replace with the WhatsApp number and predefined message
  const whatsappNumber = 'https://wa.me/8247061367?text=Hello%20I%20would%20like%20to%20book%20offline';
  window.open(whatsappNumber, '_blank');
};
const Bookings = () => {
  return (
    <section className='bg-warning'>
    <div className='container mt-5 p-3'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <h2 className='text-center text-dark'>Bookings</h2>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-3 d-flex justify-content-center mx-3">
          <div>
            <button type="button" className="btn btn-lg btn-light mx-2" data-bs-toggle="modal" data-bs-target="#onlineModal" >
              Online
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-lg btn-dark mx-2" data-bs-toggle="modal" data-bs-target="#offlineModal">
              Offline
            </button>
          </div>
        </div>
      </div>

      {/* Online Modal */}
      <div className="modal fade" id="onlineModal" tabIndex="-1" aria-labelledby="onlineModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="onlineModalLabel">Online Booking</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>For online booking,please book here </p>
              <button className='btn btn-lg btn-success' onClick={handleOnlineBooking}>Book now</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Done</button>
            </div>
          </div>
        </div>
      </div>

      {/* Offline Modal */}
      <div className="modal fade" id="offlineModal" tabIndex="-1" aria-labelledby="offlineModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="offlineModalLabel">Offline Booking</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>For offline bookings, please call us or contact us on WhatsApp.</p>
              <button type="button" className="btn btn-success me-2" onClick={handleCall}>Call</button>
              <button type="button" className="btn btn-success" onClick={handleWhatsApp}>WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Bookings;