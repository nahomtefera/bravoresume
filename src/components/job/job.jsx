import React, {Component} from 'react';
import AutosizeInput from 'react-input-autosize';
import Textarea from "react-textarea-autosize";                                                                                                                                                                                                                                                                                                                       	                                                                                                                                                                                                                                                                                                                                import rem_icon from '../../images/icons/rem-icon.png'
import './job.css';

// We create this variable to store the state of each job
let jobStorage = [{
    job_title: "",
    job_date: "",
    job_company: "",
    job_location: "",
    job_description: "",
}];

class Job extends Component {
    
    constructor(props) {
        super(props);

        // This variable will loop through the array jobStorage that contains
        // The state of every job component
        // Then it will check if the current component's Key matches 
        // Any element in jobStorage and if it does it will assign that element to itself
        let currentJob;
        for(let i=0; i<jobStorage.length; i++) {
            if(jobStorage[i].key === props.job_id){
                currentJob = jobStorage[i];
                break
            } else {
                currentJob = {
                    job_title: "",
                    job_date: "",
                    job_company: "",
                    job_location: "",
                    job_description: "",
                };
            }
        }
        
        // Once currentJob has been assigned
        // The state of the component will get the values for it's properties
        // From currentJob

        this.state = {
            job_title: currentJob.job_title,
            job_date: currentJob.job_date,
            job_company: currentJob.job_company,
            job_location: currentJob.job_location,
            job_description: currentJob.job_description,
            key: props.job_id,
        }

        this.changeJob = this.changeJob.bind(this); 
        this.changeDate = this.changeDate.bind(this); 
        this.changeCompany = this.changeCompany.bind(this); 
        this.changeLocation = this.changeLocation.bind(this); 
        this.changeDescription = this.changeDescription.bind(this); 
        this.removeJob = this.removeJob.bind(this);
    }
    // We will call this functions when the input changes
    // and it will update the state
    // In order to update the state correctly
    // we need to pass te props function as 
    // a callback to setState
    componentWillUnmount() {
        // Remember state for the next mount
        // 
        if(this.state.job_title === "" && this.state.job_company === ""
            && this.state.job_location === "" && this.state.job_description === ""){
            return
        }else{
            jobStorage.push(this.state);            
        }
        this.props.getJobInfo(jobStorage)            
        
    }

    componentWillMount(){
        this.props.getJobInfo(jobStorage)          
    }
    
    changeJob(e) {
        this.setState({
            job_title: e.target.value
        },()=>{
            this.props.getJobInfo(this.state)            
        });
    }
    changeDate(e) {
        this.setState({
            job_date: e.target.value
        },()=>{
            this.props.getJobInfo(this.state)            
        });
    }
    changeCompany(e) {
        this.setState({
            job_company: e.target.value
        },()=>{
            this.props.getJobInfo(this.state)            
        });
    }
    changeLocation(e) {
        this.setState({
            job_location: e.target.value
        },()=>{
            this.props.getJobInfo(this.state)            
        });
    }

    changeDescription(e) {
        this.setState({
            job_description: e.target.value
        },()=>{
            this.props.getJobInfo(this.state)            
        });
    }

    removeJob() {
        this.props.remJob(this.props.job_id);
    }

    render() {
        return (
            <div className='job-container'>
                {/* Remove job icon */}
                <div className="rem-job-container">
                    <img className="rem-job-icon" src={rem_icon} 
                    onClick={this.removeJob}
                    alt="remove this job"
                    />
                </div>
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