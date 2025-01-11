import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/MathMinds.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import backBtnImage from '../Media/backBtn.png';
import mmLanding from '../Media/mm-landingpage.png';
import mmHome from '../Media/mm-home.png';
import mmLesson from '../Media/mm-lessons.png';

const MathMinds = () => {
    return (
        <div className="mathminds">
            <div className='mathminds-border'>
                <div className='back-btn-div'>
                    <Link to="/projects">
                            <img src={backBtnImage} className="back-btn" alt="Back Button" />
                        </Link>
                    </div>
                <div className='mathminds-content'>
                    <h1>MathMinds</h1>
                    <p>MathMinds is an interactive web-based learning hub designed specifically for Grade 3 students at CIT-U. Developed as our capstone project, it includes features such as lesson creation, quiz management, and user role administration. I had the privilege of leading the team in bringing this educational platform to life.</p>
                    <div className='mm-img'>
                        <img src={mmLanding} />
                        <img src={mmHome} />
                    </div>
                    <p>I mostly developed the front end using React.js, incorporating interactive and responsive features. Also contributed to backend development using Spring Boot and MySQL to implement critical app functionalities. and designed most user interface features using Figma, prioritizing intuitive and student-friendly design.</p>
                    <div className='mm-img'>
                        <img src={mmLesson} />
                    </div>
                    <p>Explore our project in more detail by watching the <a href="https://drive.google.com/file/d/1VSgOyr7SAzyssZVlArxyjVPr2N6RgS8u/view?usp=sharing" className="email-link" target="_blank" rel="noopener noreferrer">video pitch</a>. You can also experience the MathMinds platform firsthand by visiting the <a href="https://math-minds.vercel.app/" className="email-link" target="_blank" rel="noopener noreferrer">live web application</a>.</p>
                    <p style={{fontSize:'smaller'}}><b>Contributors:</b> John Rodolph Bacalso, Peter Neil Colico, Denisse Claire Morales, Dave Francis Ondona, John Randolf Ribo</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
};

export default MathMinds;