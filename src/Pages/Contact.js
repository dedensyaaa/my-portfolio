import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/Contact.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import fbLogo from '../Media/fb-logo.png';
import linkedInLogo from '../Media/linkedin-logo.png';
import githubLogo from '../Media/github-logo.png';

const Contact = () => {
    return (
        <div className="contact">
            <div className='contact-border'>
                <div className='contact-content'>
                    <h1>Contact</h1>
                    <p>Feel free to reach out to me through any of the following channels! I'm always open to connecting with new people, whether it's for collaboration, questions, or just a friendly chat.</p>
                    <div className='contact-info'>
                        <a href="https://www.facebook.com/dedensyaaa" target="_blank" rel="noopener noreferrer">
                            <img src={fbLogo} alt='Facebook'/>
                        </a>
                        <a href="https://www.linkedin.com/in/denisse-claire-morales-972055243/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInLogo} alt='LinkedIn'/>
                        </a>
                        <a href="https://github.com/dedensyaaa" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt='GitHub'/>
                        </a>
                    </div>
                    <p>You can also contact me directly through the following information:</p>
                    <p>
                        <strong>Mobile No.:</strong> +639276391237<br />
                        <strong>Email:</strong> <a href="mailto:moralesdenisseclaire@gmail.com" className='email-link'>moralesdenisseclaire@gmail.com</a><br />
                        <strong>Address:</strong> 459 Purok Bomba, Pooc, Talisay City, Cebu 6045
                    </p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
};

export default Contact;