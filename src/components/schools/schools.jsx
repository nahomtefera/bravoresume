import React, {Component} from 'react';
import School from '../school/school';
import plus_icon from '../../images/icons/plus-icon.png'
import './schools.css'

class Schools extends Component {

    constructor(props) {
        super(props);

        this.state={
            number_schools: [{
                key: new Date().getTime(),
            }],
        }
        this.addSchool = this.addSchool.bind(this);
        this.remSchool = this.remSchool.bind(this);
    }

    addSchool() {
        const prevNumOfSchools = this.state.number_schools;
        // Assign a new getTime stamp to every new element we push
        prevNumOfSchools.push({
            key: new Date().getTime()
        })

        this.setState({
            number_schools: prevNumOfSchools,
        })
    }

    remSchool(id) {
        var prevSchools = this.state.number_schools;
        
        if(prevSchools.length === 1) {
            return alert("You need to have at least one school");
        }

        for (var i = 0; i < prevSchools.length; i++){
            if(prevSchools[i].key === id) {
                prevSchools.splice(i, 1);
            }
        }

        this.setState({
            number_schools: prevSchools,
        })
    }

    render() {
        return(
            <div className="schools-container">

                {
                    this.state.number_schools.map((school) =>{
                        return (
                            <School 
                                key={school.key} 
                                school_id={school.key} 
                                remSchool={this.remSchool}
                            />
                        )
                    })
                }
                {/* Button to remove job */}
                <div className="add-school-btn-container">
                    <img className="add-school-btn" 
                        src={plus_icon} alt="add school"
                        onClick={this.addSchool}
                    />
                </div>
            </div>
        )
    }
}

export default Schools;