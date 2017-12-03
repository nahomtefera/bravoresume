import React, {Component} from 'react';
import Userinfo from '../userinfo/userinfo';
import WorkExperience from '../workexperience/workexperience';
import Education from '../education/education';
import create_pdf from '../../create_pdf';
import fancy_resume from '../../fancy_resume';
import beautiful_resume from '../../beautiful_resume';
import clean_resume from '../../clean_resume';

// import Profile from '../profile/profile';

import './resume.css'

class Resume extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_info: {},
            work_experience: [],
            education: [],
            showUser: true,
            showWork: false,
            showEducation: false,
            showDownloadBtn: true, //change this to not show at the beginning
        }
        this.getUserInfo = this.getUserInfo.bind(this);
        this._createpdf = this._createpdf.bind(this);
        this.get_work_exp = this.get_work_exp.bind(this);
        this.get_education = this.get_education.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    _createpdf = () => {
        // We are going to pass create_pdf the info from
        // different components stored in the state
        clean_resume(this.state);
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

    get_education(education) {
        this.setState({
            education: education
        })
    }

    // Mobile Functionality to change field
    next() {
        if(this.state.showUser === true) {
            this.setState({
                showUser: false,
                showWork: true,
                showEducation: false,
                showDownloadBtn:false
            })
        }else if(this.state.showWork === true){
            this.setState({
                showUser: false,
                showWork: false,
                showEducation: true,
                showDownloadBtn:true
            })
        }
    }
    // Mobile Functionality to change field
    prev() {
        if(this.state.showWork === true) {
            this.setState({
                showUser: true,
                showWork: false,
                showEducation: false,
                showDownloadBtn:false
            })
        }else if(this.state.showEducation === true){
            this.setState({
                showUser: false,
                showWork: true,
                showEducation: false,
                showDownloadBtn:false
            })
        }
    }

    render() {
        return(
            <div className="resume-info">

                <Userinfo 
                    className={this.state.showUser ?
                        "show":
                        "hide"} 
                    getUserInfo={this.getUserInfo} 
                />
                <WorkExperience 
                    className={this.state.showWork ?
                        "show":
                        "hide"}
                    get_work_exp={this.get_work_exp} 
                /> 

                <Education 
                    className={this.state.showEducation ?
                        "show":
                        "hide"}
                    get_education={this.get_education} 
                />

                <br/><br/><br/>
            
                <div className="prev-next-btn">
                    <button onClick={this.prev} className="prev-btn">Previous</button>
                    <button onClick={this.next} className="next-btn">Next</button>
                </div>
                <br/><br/><br/>
                <div className={this.state.showDownloadBtn ?
                        "show download-pdf-btn-container":
                        "hide download-pdf-btn-container"
                        }>
                    <button className="download-pdf-btn" onClick={this._createpdf}>Download pdf</button>
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default Resume;