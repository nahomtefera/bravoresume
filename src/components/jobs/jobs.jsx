import React, {Component} from 'react';
import Job from '../job/job';
import plus_icon from '../../images/icons/plus-icon.png'
import './jobs.css'

class Jobs extends Component {

    constructor(props) {
        super(props);

        this.state={
            number_jobs: [{
                key: new Date().getTime(),
            }],
        }
        this.addJob = this.addJob.bind(this);
        this.remJob = this.remJob.bind(this);
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