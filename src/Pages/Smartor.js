import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/Smartor.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import backBtnImage from '../Media/backBtn.png';
import smartorSP from '../Media/smartor-SP.png';
import smartorHome from '../Media/smartor-home.png';
import smartorAppointment from '../Media/smartor-appointment.png';
import smartorNotify from '../Media/smartor-notification.png';

const Smartor = () => {
    return (
        <div className="smartor">
            <div className='smartor-border'>
                <div className='back-btn-div'>
                    <Link to="/projects">
                            <img src={backBtnImage} className="back-btn" alt="Back Button" />
                        </Link>
                    </div>
                <div className='smartor-content'>
                    <h1>Smartor</h1>
                    <p>Smartor is a mobile application designed to streamline the process of booking tutoring sessions with qualified tutors. The platform offers features such as browsing available tutors, setting appointments, receiving reminders, and more. With Smartor, users can easily manage their tutoring needs in a convenient and organized way.</p>
                    <div className='smartor-img'>
                        <img src={smartorSP} />
                        <img src={smartorHome} />
                    </div>
                    <p>In this project, I focused on designing the user interface using Figma, ensuring the app was intuitive, visually appealing, and user-friendly. Additionally, I contributed to the mobile app development by assisting with specific tasks in Android Studio. The app was developed as part of a project showcasing both functional and design aspects of mobile platforms.</p>
                    <div className='smartor-img'>
                        <img src={smartorAppointment} />
                        <img src={smartorNotify} />
                    </div>
                    <p>Learn more about Smartor by watching the <a href="https://cebuinstituteoftechnology-my.sharepoint.com/:v:/g/personal/denisseclaire_morales_cit_edu/EfJmLxnj6dNLmjj4ViEipQABVk5F1bv4al4a53Q_LGx7Fg?e=BpPFkh" className="email-link" target="_blank" rel="noopener noreferrer">promo video</a>, which highlights its features and functionality.</p>
                    <p style={{fontSize:'smaller'}}><b>Contributors:</b> Peter Neil Colico, Denisse Claire Morales</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
}; 

export default Smartor;