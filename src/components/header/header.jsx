import React, {Component} from 'react';
import logo from '../../images/logo2.png'
import arrow_down from '../../images/icons/arrow-down.png';
import arrow_up from '../../images/icons/arrow-up.png';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showNav: false,
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        if(this.state.showNav === false) {
            this.setState({showNav: true})
        } else {
            this.setState({showNav: false})
        }
    }

    render() {
        return (
            <div className="main-header">
                <div className="header-container">
                    <img src={logo} className="bravo-logo-main" alt="bravoresume logo"/>
                    <div className="nav-bar-icon">
                        <img className="nav-bar-icon-item"
                            onClick={this.toggleNav}
                            src={this.state.showNav ? 
                                    arrow_up :
                                    arrow_down
                            } 
                            alt="toggle nav bar"
                        />
                    </div>
                    <div className= {
                        this.state.showNav ? 
                            "slideDown nav-bar":
                            "fadeout hide nav-bar"
                    }>
                        <ul className="nav-bar-list">
                            <li className="nav-bar-list-item">Home</li>
                            <li className="nav-bar-list-item">About Us</li>
                            <li className="nav-bar-list-item">Contact</li>
                            <li className="nav-bar-list-item">Career Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;