import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "../PagesCSS/Projects.css";
import CustomViewButton from '../ReusableComponents/CustomViewBtn';
import BackToHomeFooter from '../ReusableComponents/BackToHomeFooter';

const Projects = () => {
    return (
        <div className="projects">
            <div className='projects-border'>
                <div className='projects-content'>
                    <h1>Projects</h1>
                        <p>Here is a list of some projects and activities that I’ve made and participated on during my coursework:</p>
                        <div className='projects-list'>
                            <div className='projects-container'>
                                <div className='projects-text'>
                                    <h3>MathMinds</h3>
                                    <p>A Mathematics Web Learning Hub for CIT-U’s Grade 3 Elementary Students</p>
                                </div>
                                <div className='projects-view-btn'>
                                    <CustomViewButton
                                        component={Link}
                                        to="/projects/mathminds" // Example route
                                    >
                                        View
                                    </CustomViewButton>
                                </div>
                            </div>
                            <div className='projects-container'>
                                <div className='projects-text'>
                                    <h3>+TIC</h3>
                                    <p>Plastic Waste Management Web Application</p>
                                </div>
                                <div className='projects-view-btn'>
                                    <CustomViewButton
                                        component={Link}
                                        to="/projects/+TIC" // Example route
                                    >
                                        View
                                    </CustomViewButton>
                                </div>
                            </div>
                            <div className='projects-container'>
                                <div className='projects-text'>
                                    <h3>AFRASCU</h3>
                                    <p>Automated Facial Recognition Attendance System for Classroom Use</p>
                                </div>
                                <div className='projects-view-btn'>
                                    <CustomViewButton
                                        component={Link}
                                        to="/projects/AFRASCU" // Example route
                                    >
                                        View
                                    </CustomViewButton>
                                </div>
                            </div>
                            <div className='projects-container'>
                                <div className='projects-text'>
                                    <h3>Smartor</h3>
                                    <p>Tutor Appoinment Scheduling Mobile Application</p>
                                </div>
                                <div className='projects-view-btn'>
                                    <CustomViewButton
                                        component={Link}
                                        to="/projects/Smartor" // Example route
                                    >
                                        View
                                    </CustomViewButton>
                                </div>
                            </div>
                            <div className='projects-container'>
                                <div className='projects-text'>
                                    <h3>GoTicket</h3>
                                    <p>Event Ticketing Mobile Application</p>
                                </div>
                                <div className='projects-view-btn'>
                                    <CustomViewButton
                                        component={Link}
                                        to="/projects/GoTicket" // Example route
                                    >
                                        View
                                    </CustomViewButton>
                                </div>
                            </div>
                            <div className='projects-container'>
                                <div className='projects-text'>
                                    <h3>D' Nail Bar</h3>
                                    <p>Nail Care Services Appointment Scheduling Platform</p>
                                    </div>
                                <div className='projects-view-btn'>
                                    <CustomViewButton
                                        component={Link}
                                        to="/projects/DNailBar" // Example route
                                    >
                                        View
                                    </CustomViewButton>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <BackToHomeFooter />
        </div>
    );
};

export default Projects;