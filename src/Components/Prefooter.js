import React from 'react'
import brandLogo from '../images/vkingslogo.jpeg';
const Prefooter = () => {
    return (
        <>
            <div className='container bg-dark'>
                <div className='row my-3'>
                    <div className='col col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
                        <address className='text-center text-light'>
                            <h4>Address</h4>
                            <strong>Vkings Sportz Arena</strong><br />
                            Beside cktktr convention , Badangpet<br />
                            Hyderabad, Telangana <br />
                            <a href="tel:+918247061367" className='d-block mt-2'>+918247061367</a>
                            <a href="mailto:vkingssportzarena@gmail.com">vkingssportzarena@gmail.com</a>
                        </address>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prefooter