import React, {Component} from 'react';
import AutosizeInput from 'react-input-autosize';
import '../../images/icons/home-icon.png';
import Textarea from "react-textarea-autosize";
import './userinfo.css';

let fixUserInfo = {
    user_name: "",
    user_last_name: "",
    user_home_address: "",
    user_phone_number: "",
    user_email_address: "",
    user_position: "",
    user_profile: ""
};


class Userinfo extends Component {
    
    constructor(props) {
        super(props);

        this.state = fixUserInfo;
        this.changeName = this.changeName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeHomeAddress = this.changeHomeAddress.bind(this);
        this.changeEmailAddress = this.changeEmailAddress.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.changeProfile = this.changeProfile.bind(this);
    }

    // We will call this functions when the input changes
    // and it will update the state
    // In order to update the state correctly
    // we need to pass te props function as 
    // a callback to setState
    
    changeName(e) {
        this.setState({
            user_name: e.target.value
        }, ()=>{
            this.props.getUserInfo(this.state)            
        });
        
    }
    changeLastName(e) {
        this.setState({
            user_last_name: e.target.value
        },()=>{
            this.props.getUserInfo(this.state)                    
        })
    }
    changeHomeAddress(e) {
        this.setState({
            user_home_address: e.target.value
        },()=>{
            this.props.getUserInfo(this.state)                    
        })
    }
    changePhoneNumber(e) {
        this.setState({
            user_phone_number: e.target.value
        },()=>{
            this.props.getUserInfo(this.state)                    
        })
    }
    changeEmailAddress(e) {
        this.setState({
            user_email_address: e.target.value
        },()=>{
            this.props.getUserInfo(this.state)             
        })
    }
    changePosition(e) {
        this.setState({
            user_position: e.target.value
        },()=>{
            this.props.getUserInfo(this.state)                         
        })
    }
    changeProfile(e) {
        this.setState({
            user_profile: e.target.value
        },()=>{
            this.props.getUserInfo(this.state)                         
        })
    }    

    componentWillUnmount() {
        // Remember state for the next mount
        fixUserInfo = this.state;
        this.props.getUserInfo(this.state)
    }
    componentWillMount(){
        this.props.getUserInfo(this.state)                    
    }

    render () {
        return (
            <div className={this.props.className + " user-info-container"}>
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

                <div className="position-container">
                    <AutosizeInput
                        className="user_position"
                        value={this.state.user_position}
                        onChange={this.changePosition}
                        placeholder="Position"
                    />
                </div>

                <div className="user-contact-details">
                    <AutosizeInput name="user-home-address" className="user-home-address"
                        value={this.state.user_home_address} placeholder="City, State Postal Code"
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

                <div className="profile-container">
                    <Textarea
                        className="user_profile"
                        value={this.state.user_profile}
                        onChange={this.changeProfile}
                        rows="2"
                        placeholder="Write a brief description of who you are what you are doing and what you want"
                    />
                </div>

            </div>
        )
    }
    
}

export default Userinfo;
