import React, {Component} from 'react';
import Schools from '../schools/schools';
import './education.css';

class Education extends Component {

    render() {
        return (
            <div className="education-container">
                <h3 className="education-header">Education</h3>
                <Schools />
            </div>
        )
    }
}

export default Education;