import React, {Component} from 'react';
import './resumeslider.css';


class ResumeSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            templates_images: [
                {
                    src: require("../../images/resume_templates/beautiful_resume.JPG"),
                    key: 1
                },
                {
                    src: require("../../images/resume_templates/clean_resume.JPG"),
                    key: 2
                },
                {
                    src: require("../../images/resume_templates/fancy_resume.JPG"),
                    key: 3
                },
                {
                    src: require("../../images/resume_templates/leftbar_resume.JPG"),
                    key: 4
                },
                {
                    src: require("../../images/resume_templates/structured_resume.JPG"),
                    key: 5
                },
            ]
        }
    }

    render(){
        return(
            <div className={this.props.className + " resume-slider-container"}>
                <div className="slider-scroll-container">
                    <div className="slider-scroll">
                        <div className="slider">
                            {
                                this.state.templates_images.map((img)=>{
                                    return(
                                        <div className="picture-container">
                                            <img 
                                                className="picture-item"
                                                src={img.src} 
                                                alt="resume template"
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