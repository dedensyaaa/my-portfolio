import React from "react";
import { Link } from 'react-router-dom';
import '../PagesCSS/BackToHomeFooter.css'; // Add styling here
import back2homeBtn from '../Media/back2home-btn.png';

const BackToHomeFooter = () => {
  return (
    <div className="back-to-home-footer">
        <Link to="/">
            <img 
            src={back2homeBtn} // Replace with your image path
            alt="Back to Home" 
            className="back2home-button" 
            />
        </Link>
    </div>
  );
};

export default BackToHomeFooter;
