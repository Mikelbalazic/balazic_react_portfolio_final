import React from 'react';
import "./Portfolio.css";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
        
        <img src="img/work-icon.png" class="icon" alt="hand_holding_pencil_for_work_section"/>

        <section className="portfolio-section">
            <div class="work">
            <a href="https://moat-application.herokuapp.com/" target="react/jsx-no-target-blank">
            <img src="img/moat-img.png" class="work-img" alt="Run_Buddy_Website_Landing_Page"/>
            </a>
            <div class="work-overlay">
            <div class="work-text">Moat</div>
            </div>
            </div>
            <div class="work">
            <a href="http://mikbdesign.com/" target="react/jsx-no-target-blank">
            <img src="img/mikb-des-img.png" class="work-img" alt="mikbdesign.com_Landing_Page"/>
            </a>
            <div class="work-overlay">
            <div class="work-text">mikbdesign</div>
            </div>
            </div>
            <div class="work">
            <a href="https://utorteam13.github.io/Team13_Project1/" target="react/jsx-no-target-blank">
            <img src="img/latest-pitch-img.png" class="work-img" alt="latestpitch_Landing_Page"/>
            </a>
            <div class="work-overlay">
            <div class="work-text">Latest Pitch</div>
            </div>
            </div>
        </section>

        </div>
    )
}