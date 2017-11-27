import React, {Component} from 'react';
import Job from '../job/job';
import plus_icon from '../../images/icons/plus-icon.png'
import './jobs.css'

class Jobs extends Component {

    constructor(props) {
        super(props);

        this.state={
            number_jobs: [{
                key: 0,
            }],
        }
        this.addJob = this.addJob.bind(this);
    }

    addJob() {
        const prevNumOfJobs = this.state.number_jobs;
        var numOfJobs = prevNumOfJobs.length;

        prevNumOfJobs.push({
            key: numOfJobs
        })

        this.setState({
            number_jobs: prevNumOfJobs,
        })
    }

    render() {
        return(
            <div className="jobs-container">

                {
                    this.state.number_jobs.map((job) =>{
                        return (
                            <Job key={job.key} />
                        )
                    })
                }
                

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