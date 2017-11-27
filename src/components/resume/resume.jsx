import React, {Component} from 'react';
import Userinfo from '../userinfo/userinfo';
import WorkExperience from '../workexperience/workexperience';
import './resume.css'

class Resume extends Component {

    render() {
        return(
            <div className="resume-info">
                <Userinfo />
                <WorkExperience />  
            </div>
        )
    }
}

export default Resume;