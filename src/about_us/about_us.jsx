import React, {Component} from 'react';
import './about_us.css';
import right_quote from '../images/about_us/right-quotation.png';
import left_quote from '../images/about_us/left-quotation.png';
import logo_letter from '../images/about_us/logoLetter.png';
import doc_img from '../images/about_us/doc.png';
import laptop_img from '../images/about_us/laptop.png';
import linkedin_img from '../images/about_us/linkedin.png';
import nahom_img from '../images/about_us/nahom.jpg'
import jonathan_img from '../images/about_us/jonathan.jpg'
import vivian_img from '../images/about_us/vivian.jpg'


class AboutUs extends Component {

    render(){
        return (
            <div className="about-us-container">

                <img className="about-us-main-img" src={require('../images/about_us/main_img_2.jpg')} alt=""/>

                {/* MISSION STATEMENT */}
                <div className="about-us-mission">                    
                    <img className="small-logo" src={logo_letter} alt="bravoresume logo" />
                </div>

                {/* OUR METHODS */}
                <div className="about-us-method"> 
                    <h2 className="method-header">OUR METHODS</h2>
                </div>
                
                <div className="method-container">
                    <div className="method-item-container">
                        <div className="method-img-container">
                            <img className="method-img-item" src={doc_img} alt=""/>
                        </div>

                        <div className="method-text-container">
                            We will start by helping you create an updated resume and download it as pdf.
                        </div>
                    </div>

                    <div className="method-item-container">
                        <div className="method-img-container">
                            <img className="method-img-item" src={laptop_img} alt=""/>
                        </div>

                        <div className="method-text-container">
                            Our Career Development Blog will keep you updated with the best practices to the land the next best opportunity.
                        </div>
                    </div>

                    <div className="method-item-container">
                        <div className="method-img-container">
                            <img className="method-img-item" src={linkedin_img} alt=""/>
                        </div>

                        <div className="method-text-container">
                            Connections are key. Interact with us on Social Media to get help if you feel lost.
                        </div>
                    </div>
                </div>

                <div className="separation-bar"></div>
                {/* OUR TEAM */}

                <div className="our-team-method"> 
                    <h2 className="our-team-header">OUR TEAM</h2>
                </div>
                
                <div className="our-team-container">
                    <div className="our-team-item-container">
                        <div className="our-team-img-container">
                            <img className="our-team-img-item" src={nahom_img} alt=""/>
                        </div>

                        <div className="our-team-text-container">
                            <span className="team-member-name"> Nahom Endale</span> Founder and web developer.
                        </div>
                    </div>

                    <div className="our-team-item-container">
                        <div className="our-team-img-container">
                            <img className="our-team-img-item" src={vivian_img} alt=""/>
                        </div>

                        <div className="our-team-text-container">
                            <span className="team-member-name">Vivian Bustamante</span> Graphics and Social Media Director
                        </div>
                    </div>

                    <div className="our-team-item-container">
                        <div className="our-team-img-container">
                            <img className="our-team-img-item" src={jonathan_img} alt=""/>
                        </div>

                        <div className="our-team-text-container">
                           <span className="team-member-name">Jonathan Endale </span> Programmer
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}



export default AboutUs;