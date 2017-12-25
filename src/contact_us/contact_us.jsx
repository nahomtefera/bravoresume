import React, {Component} from 'react';
import './contact_us.css';
import AutosizeInput from 'react-input-autosize';
import Textarea from "react-textarea-autosize";


class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeSubject = this.changeSubject.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeName(e){
        this.setState({
            name: e.target.value
        })
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    changeSubject(e){
        this.setState({
            subject: e.target.value
        })
    }

    changeMessage(e){
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div className="contact-us-container">
                <h1 className="contact-us-header">Contact us</h1>

                <div className="contact-us-form-container">

                    <AutosizeInput className="contact-us-form-name" 
                        placeholder="Name and Last Name"                                            
                        value={this.state.name}
                        onChange={this.changeName}
                    />
                    
                    <AutosizeInput className="contact-us-form-email" 
                        placeholder="Your email"                                            
                        value={this.state.email}
                        onChange={this.changeEmail}
                    />

                    <AutosizeInput className="contact-us-form-subject" 
                        placeholder="Subject"                                            
                        value={this.state.subject}
                        onChange={this.changeSubject}
                    />

                    <Textarea className="contact-us-form-message" 
                        placeholder="Message"                                            
                        value={this.state.message}
                        onChange={this.changeMessage}
                    />  
                </div>

                <div className="contact-us-send-container">
                    <button className="contact-us-send">SEND</button>
                </div>
            </div>
        )
    }
}

export default ContactUs;