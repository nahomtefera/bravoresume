import React, {Component} from 'react';
import Userinfo from '../userinfo/userinfo';
import WorkExperience from '../workexperience/workexperience';
import Education from '../education/education';
import './resume.css'

class Resume extends Component {

    render() {
        return(
            <div className="resume-info">
                <Userinfo />
                <WorkExperience /> 
                <Education /> 
            </div>
        )
    }
}

export default Resume;