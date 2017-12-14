import React, {Component} from 'react';
import logo from '../../images/logo2.png'
import arrow_down from '../../images/icons/arrow-down.png';
import arrow_up from '../../images/icons/arrow-up.png';
import './header.css';
import { Link } from 'react-router-dom'
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

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
                    {/* We will now create a responsive list */}
                    <div className= {
                        this.state.showNav ? 
                            "slideDown nav-bar":
                            "hide nav-bar"
                    }>
                        <ul className="nav-bar-list">
                            <li className="nav-bar-list-item"><Link to="/">Home</Link></li>
                            <li className="nav-bar-list-item"><Link to="/about_us">About Us</Link></li>
                            <li className="nav-bar-list-item"><Link to="/contact">Contact</Link></li>
                            <li className="nav-bar-list-item"><Link to="/career_development">Career Development</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;