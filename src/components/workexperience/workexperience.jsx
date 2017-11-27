import React, {Component} from 'react';
import Jobs from '../jobs/jobs';
import './workexperience.css';

class WorkExperience extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work-experience-container">
                <h3 className="work-experience-header">Work Experience</h3>
                <Jobs />
            </div>
        )
    }
}

export default WorkExperience;