import React, {Component} from 'react';
import logo from '../../images/logo2.png'
import './header.css';

class Header extends Component {

    render() {
        return (
            <div className="main-header">
                <div className="header-container">
                    <img src={logo} className="bravo-logo-main" alt="bravoresume logo"/>

                    <div className="nav-bar">
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