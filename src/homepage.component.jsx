import React from 'react';
import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
       <div className="directory-menu">
        <div className="menu-item">
            <div className="content">
                <h2 className="title">WHEELS</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h2 className="title">DRIVETRAIN // BRAKES</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h2 className="title">COCKPIT // SADDLES</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h2 className="title">FRAMES // FORKS</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h2 className="title">ACCESSORIES</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
       </div>
    </div>          
)

export default HomePage;