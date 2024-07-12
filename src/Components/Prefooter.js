import React from 'react';

const Prefooter = () => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row my-3 d-flex justify-content-evenly'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-evenly text-light'>
                   <div>
                   <h4>Address</h4>
                    <address>
                        <strong>Vkings Sportz Arena</strong><br />
                        Beside Cktktr Convention, Badangpet<br />
                        Hyderabad, Telangana<br />
                        <a href="tel:+918247061367" className='d-block mt-2'>+918247061367</a>
                        <a href="mailto:vkingssportzarena@gmail.com">vkingssportzarena@gmail.com</a>
                    </address>
                   </div>
                    <div>
                    <h4>Location</h4>
                    <p>
                        <iframe
                            title="Vkings Sportz Arena Location"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.2211403870897!2d78.5162985735349!3d17.304876183568304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba322bb646435%3A0xe9c0a38b69cf843b!2sV%20kings%20Sportz%20Arena!5e0!3m2!1sen!2sin!4v1720752942773!5m2!1sen!2sin" 
                            width="100%"
                            height="100"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe> 
                    </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Prefooter;
