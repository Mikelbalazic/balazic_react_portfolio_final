import React from 'react';
import "./Resume.css";

export default function Resume() {
    return (
        <div className="resume" id="resume">
            <div className="skills">
                <img src="img/resume-icon.png" className="resume-icon" alt="glasses-icon-for-resume-section" />
                <h1>Web Design Skills</h1>
                <div className="skills-list">
                    <p className="skills-list-item">HTML</p><br></br>
                    <p className="skills-list-item">CSS</p><br></br>
                    <p className="skills-list-item">JAVASCRIPT</p><br></br>
                    <p className="skills-list-item">REACT</p><br></br>
                </div>
            </div>

            <a href="img/Mikel-Balazic-Resume.jpg" className="resumeimga" download>
                <img src="img/Mikel-Balazic-Resume.jpg" className="resumeimg" alt="MikelReedBalazicResume" />
            </a>


        </div>
    )
}