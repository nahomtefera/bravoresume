import React, {Component} from 'react';
import AutosizeInput from 'react-input-autosize';
import Textarea from "react-textarea-autosize";

import './job.css';

class Job extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            job_title: "",
            job_date: "",
            job_company: "",
            job_location: "",
            job_description: ""
        }

        this.changeJob = this.changeJob.bind(this); 
        this.changeDate = this.changeDate.bind(this); 
        this.changeCompany = this.changeCompany.bind(this); 
        this.changeLocation = this.changeLocation.bind(this); 
        this.changeDescription = this.changeDescription.bind(this); 
        
    }

    changeJob(e) {
        this.setState({
            job_title: e.target.value
        })
    }
    changeDate(e) {
        this.setState({
            job_date: e.target.value
        })
    }
    changeCompany(e) {
        this.setState({
            job_company: e.target.value
        })
    }
    changeLocation(e) {
        this.setState({
            job_location: e.target.value
        })
    }
    changeDescription(e) {
        this.setState({
            job_description: e.target.value
        })    
    }
    

    render() {
        return (
            <div className='job-container'>
            {/* Job Title */}
                <AutosizeInput name="job-title" className="job-title" 
                        value={this.state.job_title} placeholder="Job Title"
                        onChange={this.changeJob}
                />
            {/* Dates worked */}
                <AutosizeInput name="job-date" className="job-date" 
                        value={this.state.job_date} placeholder="01/17 - Present"
                        onChange={this.changeDate}
                />
                <br/>
            {/* Company */}
                <AutosizeInput name="job-company" className="job-company" 
                        value={this.state.job_company} placeholder="Microsoft"
                        onChange={this.changeCompany}
                />
            {/* Location */}
                <AutosizeInput name="job-location" className="job-location" 
                        value={this.state.job_location} placeholder="Sunnyvale"
                        onChange={this.changeLocation}
                />
                <br/>
            {/* Description */}
                <Textarea name="job-description" className="job-description" rows="2"
                        value={this.state.job_description} placeholder="Describe your job responsibilities, accomplishments and technologies you have used. It's highly recommended that you use bullet points to describe your experience."
                        onChange={this.changeDescription}                        
                />
            </div>
        )
    }
}

export default Job; 