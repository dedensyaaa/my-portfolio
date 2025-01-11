import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/Smartor.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import backBtnImage from '../Media/backBtn.png';
import goTixHome from '../Media/goTix-home.png';
import goTixSettings from '../Media/goTix-settings.png';
import goTixReview from '../Media/goTix-reviewTix.png';
import goTixSuccess from '../Media/goTix-success.png';

const GoTicket = () => {
    return (
        <div className="smartor">
            <div className='smartor-border'>
                <div className='back-btn-div'>
                    <Link to="/projects">
                            <img src={backBtnImage} className="back-btn" alt="Back Button" />
                        </Link>
                    </div>
                <div className='smartor-content'>
                    <h1>GoTicket</h1>
                    <p>GoTicket is a mobile event ticketing application designed to enhance the user experience in finding and purchasing event tickets. With features such as event browsing, search filters for location and event type, and real-time updates on events and ticket availability, GoTicket aims to simplify the ticketing process for concerts, sports games, and other events.</p>
                    <div className='smartor-img'>
                        <img src={goTixHome} />
                        <img src={goTixReview} />
                    </div>
                    <p>As the project leader, I was responsible for leading the team in designing the app's interface using Figma, prioritizing an intuitive and visually appealing user experience. This project was developed as part of our Human-Computer Interaction (HCI) course, with a focus on UI/UX design.</p>
                    <div className='smartor-img'>
                        <img src={goTixSuccess} />
                        <img src={goTixSettings} />
                    </div>
                    <p>You can watch our <a href="https://www.youtube.com/watch?v=teinBB1JxbA" className="email-link" target="_blank" rel="noopener noreferrer">video pitch</a> to see a sample advertisement and learn more about the GoTicket app.</p>
                    <p style={{fontSize:'smaller'}}><b>Contributors:</b> Michael Vincent Dadula, Denisse Claire Morales, Roben Navales, Micaella Obeso</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
}; 

export default GoTicket;