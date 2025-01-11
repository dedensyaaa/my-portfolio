import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/MathMinds.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import backBtnImage from '../Media/backBtn.png';
import afrascuHome from '../Media/afrascu-home.png';
import afrascuStudList from '../Media/afrascu-studList.png';
import afrascuChecker from '../Media/afrascu-checker.png';

const Afrascu = () => {
    return (
        <div className="mathminds">
            <div className='mathminds-border'>
                <div className='back-btn-div'>
                    <Link to="/projects">
                            <img src={backBtnImage} className="back-btn" alt="Back Button" />
                        </Link>
                    </div>
                <div className='mathminds-content'>
                    <h1>AFRASCU</h1>
                    <p>The Automated Facial Recognition Attendance System for Classroom Use (AFRASCU) is a project aimed at revolutionizing attendance tracking in educational settings. Designed to replace manual methods, AFRASCU utilizes facial recognition technology to provide a more efficient, accurate, and real-time solution for monitoring student attendance in class.</p>
                    <div className='mm-img'>
                        <img src={afrascuHome} />
                        <img src={afrascuStudList} />
                    </div>
                    <p>The project leverages Django for both frontend and backend development, with MySQL as the database to handle attendance records. I contributed by implementing the facial recognition module using OpenCV, enabling the application to accurately recognize and track students' attendance. Additionally, I assisted in developing test cases using TestRail, ensuring feature reliability and the overall robustness of the system.</p>
                    <div className='mm-img'>
                        <img src={afrascuChecker} />
                    </div>
                    <p>AFRASCU aims to modernize the attendance process, improving accuracy and saving valuable classroom time, all while providing real-time attendance updates.</p>
                    <p style={{fontSize:'smaller'}}><b>Contributors:</b> Hazelyn Balingcasag, Gregorio Cañete Jr., Jeremiah Montebon, Denisse Claire Morales, Darryl Obbus, John Oscar Roble</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
}; 

export default Afrascu;