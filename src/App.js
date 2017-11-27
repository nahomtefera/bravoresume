import React, { Component } from 'react';
import Header from './components/header/header'
import Userinfo from './components/userinfo/userinfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="resume-info">
          <Userinfo />
        </div>

        <br/><br/><br/><br/>
      </div>
    );
  }
}

export default App;
