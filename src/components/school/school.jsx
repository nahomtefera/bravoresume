import React, {Component} from 'react';
import AutosizeInput from 'react-input-autosize';
import rem_icon from '../../images/icons/rem-icon.png';
import './school.css';

// We create this variable to store the state of each school info
let schoolStorage = [{
    degree: "",
    year: "",
    school_name: "",
    school_location: "",
}];

class School extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            degree: "",
            year: "",
            school_name: "",
            school_location: "",
            key: props.school_id,
        }

        this.changeDegree = this.changeDegree.bind(this); 
        this.changeYear = this.changeYear.bind(this); 
        this.changeSchool = this.changeSchool.bind(this); 
        this.changeLocation = this.changeLocation.bind(this); 
        this.removeDegree = this.removeDegree.bind(this);
    }

    
    changeDegree(e) {
        this.setState({
            degree: e.target.value
        },()=>{
            this.props.getSchoolsInfo(this.state)
        });
    }
    changeYear(e) {
        this.setState({
            year: e.target.value
        },()=>{
            this.props.getSchoolsInfo(this.state)
        })
    }
    changeSchool(e) {
        this.setState({
            school_name: e.target.value
        },()=>{
            this.props.getSchoolsInfo(this.state)
        })
    }
    changeLocation(e) {
        this.setState({
            school_location: e.target.value
        },()=>{
            this.props.getSchoolsInfo(this.state)
        })
    }

    removeDegree() {
        this.props.remSchool(this.props.school_id);
    }

    render() {
        return (
            <div className='school-container'>
            {/* Remove job icon */}
            <div className="rem-school-container">
                <img className="rem-school-icon" src={rem_icon} 
                onClick={this.removeDegree}
                alt="remove this school"
                />
            </div>
            {/* Job Title */}
                <AutosizeInput name="school-title" className="school-title" 
                        value={this.state.degree} placeholder="School Title"
                        onChange={this.changeDegree}
                />
            {/* Dates worked */}
                <AutosizeInput name="school-date" className="school-date" 
                        value={this.state.year} placeholder="2017"
                        onChange={this.changeYear}
                />
                <br/>
            {/* Company */}
                <AutosizeInput name="school-name" className="school-name" 
                        value={this.state.school_name} placeholder="Udacity"
                        onChange={this.changeSchool}
                />
            {/* Location */}
                <AutosizeInput name="school-location" className="school-location" 
                        value={this.state.school_location} placeholder="Online"
                        onChange={this.changeLocation}
                />
                <br/>

            </div>
        )
    }
}

export default School; 