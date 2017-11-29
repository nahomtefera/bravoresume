import React, {Component} from 'react';
import Userinfo from '../userinfo/userinfo';
import WorkExperience from '../workexperience/workexperience';
import Education from '../education/education';
import create_pdf from '../../create_pdf';
import './resume.css'

class Resume extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_info: " ",
            work_experience: [],
        }

        this.getUserInfo = this.getUserInfo.bind(this);
        this._createpdf = this._createpdf.bind(this);
        this.get_work_exp = this.get_work_exp.bind(this);
    }

    _createpdf = () => {
        // We are going to pass create_pdf the info from
        // different components stored in the state
        create_pdf(this.state);
    }

    getUserInfo(info) {
        // This function is called when we type inside
        // ony of the inputs in userinfo component
        this.setState({
            user_info: info
        })
    }   

    get_work_exp(job_exp) {

        this.setState({
            work_experience: job_exp
        })
    }

    render() {
        return(
            <div className="resume-info">
                <Userinfo getUserInfo={this.getUserInfo} />
                <WorkExperience get_work_exp={this.get_work_exp} /> 
                <Education /> 
                <br/><br/><br/>
                <div className="download-pdf-btn-container">
                    <button className="download-pdf-btn" onClick={this._createpdf}>Download pdf</button>
                </div>
            </div>
        )
    }
}

export default Resume;