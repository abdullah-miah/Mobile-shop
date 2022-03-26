import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-info'>
            <div>
                <h4> How react work?</h4>
                <p> React is JavaScript libary. It's user interface building libary.
                    React is felible, efficent and declarative.It compose UI small and big 
                    componet. React UI development libary like facebook.
                </p>
            
            </div>
            <div>
                <h4> How useState work?</h4>
                <p>
                    UseState is functional hook. A state pass the initial parametter. Parametter access this useState hook.
                State can be update, edit and change able by useState. Usestate it can be use for data state change. 
                </p>
            </div>
        </div>
    );
};

export default Footer;