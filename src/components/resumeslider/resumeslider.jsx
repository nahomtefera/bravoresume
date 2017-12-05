import React, {Component} from 'react';
import './resumeslider.css';
import close_icon from '../../images/icons/close-icon.png'
import create_pdf from '../../create_pdf';
import fancy_resume from '../../fancy_resume';
import beautiful_resume from '../../beautiful_resume';
import clean_resume from '../../clean_resume';
import structured_resume from '../../structured_resume';
import leftbar_resume from '../../leftbar_resume';


class ResumeSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            templates_images: [
                {
                    src: require("../../images/resume_templates/beautiful_resume.JPG"),
                    key: 1,
                    resume_type: beautiful_resume
                },
                {
                    src: require("../../images/resume_templates/clean_resume.JPG"),
                    key: 2,
                    resume_type: clean_resume
                },
                {
                    src: require("../../images/resume_templates/fancy_resume.JPG"),
                    key: 3,
                    resume_type: fancy_resume
                },
                {
                    src: require("../../images/resume_templates/leftbar_resume.JPG"),
                    key: 4,
                    resume_type: leftbar_resume
                },
                {
                    src: require("../../images/resume_templates/structured_resume.JPG"),
                    key: 5,
                    resume_type: structured_resume
                },
            ]
        }
    }



    render(){
        return(
            <div className={this.props.className + " resume-slider-container"}>
                <div className="close-icon-container">
                    <img src={close_icon}
                        className="close-icon-item" 
                        onClick={this.props.closeSlider}
                        alt="close button"
                    />
                </div>
                <div className="slider-scroll-container">
                    <h1 className="slider-text">Choose a template</h1>
                    <div className="slider-scroll">
                        <div className="slider">
                            {
                                this.state.templates_images.map((img)=>{
                                    return(
                                        <div key={img.key} className="picture-container">
                                            <img 
                                                className="picture-item"
                                                src={img.src} 
                                                alt="resume template"
                                                onClick={()=>{
                                                    this.props.createPdf(img.resume_type)
                                                }}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeSlider;