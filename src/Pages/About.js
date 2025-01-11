import React from 'react';
import { Link } from 'react-router-dom';
import "../PagesCSS/About.css";
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';
import schoolLogo from '../Media/cit-logo.png'
import javaSkill from '../Media/java-skill.png'
import jsSkill from '../Media/js-skill.png'
import pythonSkill from '../Media/python-skill.png'
import cSkill from '../Media/c-skill.png'

const About = () => {
    return (
        <div className="about">
            <div className='about-border'>
                <div className='about-content'>
                    <h1>About Me</h1>
                    <p>I am currently a 4th year BS Information Technology student of Cebu Institute if Technology (CIT-U). I enjoy designing user interfaces, working on software projects and continuously learning new skills.</p>
                    <img src={schoolLogo} alt='cit-logo'/>
                    <p>I’ve had some experience with programming languages like Java, JavaScript, Python and C. In web development, I’ve worked with React.js, HTML, and CSS. I’m also familiar with database management using MySQL and have used tools like Git, Streamlit and Figma in my projects.</p>
                    <h2>Skill Levels</h2>
                    <div className='about-skills'>
                        <img src={javaSkill} alt='cit-logo' style={{width: '110px'}}/>
                        <img src={jsSkill} alt='cit-logo'/>
                        <img src={pythonSkill} alt='cit-logo'/>
                        <img src={cSkill} alt='cit-logo'/>
                    </div>
                    <p style={{marginTop: '5%'}}>You can view my resume <a href='https://drive.google.com/file/d/1p-Y2RXqkYP_3DnDhzCbFthERlX-WkLn_/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='email-link'>here</a>.</p>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
};

export default About;