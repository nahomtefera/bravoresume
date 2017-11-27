import React, {Component} from 'react';
import Job from '../job/job';
import './workexperience.css';

class WorkExperience extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work-experience-container">
                <h3 className="work-experience-header">Work Experience</h3>
                <Job />
            </div>
        )
    }
}

export default WorkExperience;