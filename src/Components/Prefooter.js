import React from 'react';


const Prefooter = () => {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <div className='row my-3 justify-content-around'>
                   
                    <div className='col-12 col-sm-4 col-md-3 text-light'>
                        <h4>Address</h4>
                        <address>
                            <strong>Vkings Sportz Arena</strong><br />
                            Beside Cktktr Convention, Badangpet
                            Hyderabad, Telangana
                            <a href="tel:+918247061367" className='d-block mt-2'>+918247061367</a>
                            <a href="mailto:vkingssportzarena@gmail.com">vkingssportzarena@gmail.com</a>
                        </address>
                    </div>
                    <div className='col-12 col-sm-4 col-md-3 text-light'>
                        <h4>Location</h4>
                        <p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.927784169322!2d78.502846!3d17.372123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93aaabe3f4e9%3A0xd8d08e4bd787a755!2sCktktr%20Convention%2C%20Badangpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1594710361938!5m2!1sen!2sin"
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
        </>
    );
}

export default Prefooter;
