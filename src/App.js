import React, { Component } from 'react';
import Header from './components/header/header'
import Resume from './components/resume/resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Resume />
        
        <br/><br/><br/><br/>
      </div>
    );
  }
}

export default App;
