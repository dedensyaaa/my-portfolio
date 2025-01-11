import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/MathMinds.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import backBtnImage from '../Media/backBtn.png';
import NailBar1 from '../Media/nailBar1.png';
import NailBar2 from '../Media/nailBar2.png';
import NailBar3 from '../Media/nailBar3.png';
import NailBar4 from '../Media/nailBar4.png';
import NailBar5 from '../Media/nailBar5.png';
import NailBar6 from '../Media/nailBar6.png';
import NailBar7 from '../Media/nailBar7.png';

const NailBar = () => {
    return (
        <div className="mathminds">
            <div className='mathminds-border'>
                <div className='back-btn-div'>
                    <Link to="/projects">
                            <img src={backBtnImage} className="back-btn" alt="Back Button" />
                        </Link>
                    </div>
                <div className='mathminds-content'>
                    <h1>D' Nail Bar</h1>
                    <p>D’ Nail Bar is a concept platform that allows users to conveniently schedule appointments for nail care services through its web or mobile application. Designed as a project for a platform-based development course in multimedia, the platform showcases a user-friendly interface and engaging promotional materials tailored to attract and serve its clientele.</p>
                    <h3>Brochure:</h3>
                    <div className='mm-img'>
                        <img src={NailBar1} />
                        <img src={NailBar2} />
                    </div>
                    <h3>Skyscraper Banner:</h3>
                    <div className='mm-img'>
                        <img src={NailBar3} style={{width:'20%'}} />
                    </div>
                    <h3>Leaderboard:</h3>
                    <div className='mm-img'>
                        <img src={NailBar5} />
                    </div>
                    <h3>User Interface:</h3>
                    <div className='mm-img'>
                        <img src={NailBar7} />
                        <img src={NailBar6} style={{height:'240px', width:'auto'}}/>
                    </div>
                    <p style={{fontSize:'smaller'}}><b>Contributor:</b> Denisse Claire Morales</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
}; 

export default NailBar;