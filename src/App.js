import React, { Component } from 'react';
import Header from './components/header/header'
import Resume from './components/resume/resume';
// import './styles/reset.css'
import './styles/normalize.css'
import './styles/app_mobile.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Resume />
        
        <br className="bottom-space"/><br className="bottom-space"/><br className="bottom-space"/><br className="bottom-space"/>
      </div>
    );
  }
}

export default App;
