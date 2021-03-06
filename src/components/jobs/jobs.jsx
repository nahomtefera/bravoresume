import React, {Component} from 'react';
import Job from '../job/job';
import plus_icon from '../../images/icons/plus-icon.png'
import './jobs.css'

let fixedJobs = {
    number_jobs: [{
        key: new Date().getTime(),
        job_title: "",
        job_date: "",
        job_company: "",
        job_location: "",
        job_description: "",
    }],
}


class Jobs extends Component {

    constructor(props) {
        super(props);

        this.state= fixedJobs;
        this.addJob = this.addJob.bind(this);
        this.remJob = this.remJob.bind(this);
        this.getJobInfo = this.getJobInfo.bind(this);
    }

    componentWillUnmount() {
        // Remember state for the next mount
        fixedJobs = this.state;

    }

    componentWillMount(){
        this.props.getAllJobs(fixedJobs);
    }

    

    addJob() {
        const prevNumOfJobs = this.state.number_jobs;
        // Assign a new getTime stamp to every new element we push
        prevNumOfJobs.push({
            key: new Date().getTime()
        })

        this.setState({
            number_jobs: prevNumOfJobs,
        })
    }

    remJob(id) {
        var prevJobs = this.state.number_jobs;

        for (var i = 0; i < prevJobs.length; i++){
            if(prevJobs[i].key === id) {
                prevJobs.splice(i, 1);
            }
        }

        this.setState({
            number_jobs: prevJobs,
        })
    }

    getJobInfo(job) {
        var currentState = this.state.number_jobs;
        var fullJob = job;
        
        for(var i=0; i<currentState.length; i++) {
            if (currentState[i].key === job.key) {
                currentState[i] = fullJob;
                this.setState({
                    number_jobs: currentState,
                })
            }
        }
        this.props.getAllJobs(this.state.number_jobs);
    }

    render() {
        return(
            <div className="jobs-container">

                {
                    this.state.number_jobs.map((job) =>{
                        return (
                            <Job 
                                key={job.key} 
                                job_id={job.key} 
                                remJob={this.remJob}
                                getJobInfo={this.getJobInfo}
                            />
                        )
                    })
                }
                {/* Button to remove job */}
                <div className="add-job-btn-container">
                    <img className="add-job-btn" 
                        src={plus_icon} alt="add job"
                        onClick={this.addJob}
                    />
                </div>
            </div>
        )
    }
}

export default Jobs;
