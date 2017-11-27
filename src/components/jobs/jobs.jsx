import React, {Component} from 'react';
import Job from '../job/job';
import './jobs.css'

class Jobs extends Component {

    render() {
        return(
            <div className="jobs-container">
                <Job />
            </div>
        )
    }
}

export default Jobs;