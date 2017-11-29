import React, {Component} from 'react';
import Jobs from '../jobs/jobs';
import './workexperience.css';

class WorkExperience extends Component {

    constructor(props) {
        super(props);

        this.state = {
            work_experience: []
        }

        this.getAllJobs = this.getAllJobs.bind(this);
    }

    getAllJobs(jobs) {
        this.setState({
            work_experience: jobs
        })
        
        this.props.get_work_exp(this.state.work_experience);
    }

    render() {
        return (
            <div className="work-experience-container">
                <h3 className="work-experience-header">Work Experience</h3>
                <div className="section-bar"></div>
                <Jobs getAllJobs={this.getAllJobs} />
                <br/><br/>
            </div>
        )
    }
}

export default WorkExperience;