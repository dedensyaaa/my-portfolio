import React from 'react';
import { Link } from 'react-router-dom';
import '../PagesCSS/Home.css';
import imgHeader from '../Media/group1-header.png'; // Replace with your image paths
import buttonAbout from '../Media/home-about-btn.png';
import buttonProjects from '../Media/home-projects-btn.png';
import buttonContact from '../Media/home-contact-btn.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home2">
                {/* Header section with background image */}
                <div className="home-header"></div>

                {/* Buttons section */}
                <div className="home-buttons">
                    <button>
                        <Link to="/about">
                            <img src={buttonAbout} alt="About" />
                        </Link>
                    </button>
                    <button>
                        <Link to="/projects">
                            <img src={buttonProjects} alt="Projects" />
                        </Link>
                    </button>
                    <button>
                        <Link to="/contact">
                            <img src={buttonContact} alt="Contact" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;