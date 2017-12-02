import React, {Component} from 'react';
import Textarea from "react-textarea-autosize";

import './profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profile_description: ""
        }

        this.changeProfile = this.changeProfile.bind(this);
    }

    changeProfile(e) {
        this.setState({
            profile_description: e.target.value
        })
    }

    render() {

        return (
            <div className="profile-container">
                <Textarea className="profile-content"
                value={this.state.profile_description}
                onChange={this.changeProfile}
                placeholder="Describe shortly who you are and what you are looking for."
                />
            </div>
        )

    }

}

export default Profile;