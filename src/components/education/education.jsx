import React, {Component} from 'react';
import Schools from '../schools/schools';
import './education.css';

class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            education: []
        }

        this.getAllSchools = this.getAllSchools.bind(this);
    }

    getAllSchools(schools) {
        this.setState({
            education: schools
        })

        this.props.get_education(this.state.education);
    }

    render() {
        return (
            <div className={this.props.className + " education-container"}>
                <h3 className="education-header">{this.props.title}</h3>
                <div className="section-bar"></div>
                <Schools getAllSchools={this.getAllSchools}/>
            </div>
        )
    }
}

export default Education;