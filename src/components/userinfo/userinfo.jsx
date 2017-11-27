import React, {Component} from 'react';
import AutosizeInput from 'react-input-autosize';
import '../../images/icons/home-icon.png';
import './userinfo.css';

class Userinfo extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user_name: "",
            user_last_name: "",
            user_home_address: "",
            user_phone_number: "",
            user_email_address: "",
        }

        this.changeName = this.changeName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeHomeAddress = this.changeHomeAddress.bind(this);
        this.changeEmailAddress = this.changeEmailAddress.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
    }

    changeName(e) {
        this.setState({
            user_name: e.target.value
        })
    }
    changeLastName(e) {
        this.setState({
            user_last_name: e.target.value
        })
    }
    changeHomeAddress(e) {
        this.setState({
            user_home_address: e.target.value
        })
    }
    changePhoneNumber(e) {
        this.setState({
            user_phone_number: e.target.value
        })
    }
    changeEmailAddress(e) {
        this.setState({
            user_email_address: e.target.value
        })
    }

    render () {
        return (
            <div className="user-info-container">
                <div className="user-full-name">
                    <br/>
                    <AutosizeInput name="user-name" className="user-name" 
                        value={this.state.user_name} placeholder="Name"
                        onChange={this.changeName}
                    />

                    <AutosizeInput name="user-last-name" className="user-last-name"
                        value={this.state.user_last_name} placeholder="Last Name"
                        onChange={this.changeLastName}
                    />
                </div>

                <div className="user-contact-details">
                    <AutosizeInput name="user-home-address" className="user-home-address"
                        value={this.state.user_home_address} placeholder="4048 Hamilton Ave, San Jose, 95130"
                        onChange={this.changeHomeAddress}
                    />
                    <br/>
                    <AutosizeInput name="user-phone-number" className="user-phone-number"
                        value={this.state.user_phone_number} placeholder="000-000-0000"
                        type="tel"
                        onChange={this.changePhoneNumber}
                    />      
                    <AutosizeInput name="user-email-address" className="user-email-address"
                        value={this.state.user_email_address} placeholder="name@yourdomain.com"
                        onChange={this.changeEmailAddress}
                    />                     
                </div>
            </div>
        )
    }
}

export default Userinfo;