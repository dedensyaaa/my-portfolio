import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/MathMinds.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import backBtnImage from '../Media/backBtn.png';
import tikLanding from '../Media/tik-landing.png';
import tikHome from '../Media/tik-home.png';
import tikMap from '../Media/tik-map.png';

const Tic = () => {
    return (
        <div className="mathminds">
            <div className='mathminds-border'>
                <div className='back-btn-div'>
                    <Link to="/projects">
                            <img src={backBtnImage} className="back-btn" alt="Back Button" />
                        </Link>
                    </div>
                <div className='mathminds-content'>
                    <h1>+TIC</h1>
                    <p>+TIC is an innovative web application designed to empower individuals and communities to manage plastic waste more effectively. The ultimate goal is to help clean the environment and reduce plastic waste pollution.</p>
                    <div className='mm-img'>
                        <img src={tikLanding} />
                        <img src={tikHome} />
                    </div>
                    <p>I contributed to the front-end development of +TIC, using Figma to design an engaging and user-friendly interface, and React.js to bring the designs to life. My work focused on ensuring seamless functionality and an intuitive experience for users as they navigate the app’s features.</p>
                    <div className='mm-img'>
                        <img src={tikMap} />
                    </div>
                    <p>Although the app was not deployed, you can explore its details and codebase through the <a href="https://github.com/Mel77O/plusticc-updated2" className="email-link" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
                    <p style={{fontSize:'smaller'}}><b>Contributors:</b> Nicole Angel Bacus, Christian Fredipanz Besin, Denisse Claire Morales, Melchiah Opleda, Francis Vinz Racaza</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
}; 

export default Tic;