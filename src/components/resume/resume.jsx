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
            work_info: [],
        }

        this.getUserInfo = this.getUserInfo.bind(this);
        this.getWorkExp = this.getUserInfo.bind(this);
        this._createpdf = this._createpdf.bind(this)
    }

    getWorkExp(exp) {

    }

    _createpdf = () => {
        // We are going to pass create_pdf the info from
        // different components stored in the state
        create_pdf(this.state.user_info);
    }

    getUserInfo(info) {
        // This function is called when we type inside
        // ony of the inputs in userinfo component
        this.setState({
            user_info: info
        })
    }   

    getWorkInfo(info) {
        

        this.setState({
            user_info: info
        })
    }

    render() {
        return(
            <div className="resume-info">
                <Userinfo getUserInfo={this.getUserInfo} />
                <WorkExperience getWorkExp={this.getWorkExp} /> 
                <Education /> 

                <button onClick={this._createpdf}>Download</button>
            </div>
        )
    }
}

export default Resume;