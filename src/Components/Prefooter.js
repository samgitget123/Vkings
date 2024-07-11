import React from 'react';


const Prefooter = () => {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <div className='row my-3 justify-content-around'>
                    <div className='col-12 col-sm-4 col-md-3 d-flex flex-column align-items-center text-light'>
                        <h4>Vkings Sportz Arena</h4>
                    </div>
                    <div className='col-12 col-sm-4 col-md-3 text-light'>
                        <h4>Address</h4>
                        <address>
                            <strong>Vkings Sportz Arena</strong><br />
                            Beside Cktktr Convention, Badangpet<br />
                            Hyderabad, Telangana<br />
                            <a href="tel:+918247061367" className='d-block mt-2'>+918247061367</a>
                            <a href="mailto:vkingssportzarena@gmail.com">vkingssportzarena@gmail.com</a>
                        </address>
                    </div>
                    <div className='col-12 col-sm-4 col-md-3 text-light'>
                        <h4>Location</h4>
                        <p>
                            [Embed a Google Map or an image of the location here]
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prefooter;
