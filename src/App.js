import React, { Component } from 'react';
import Header from './components/header/header'
import Resume from './components/resume/resume';
import ResumeSlider from './components/resumeslider/resumeslider';

// import './styles/reset.css'
import './styles/normalize.css'
import './styles/app_mobile.css'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showSlider: false,
    }

  }

  showSlider(){
    if(this.state.showSlider === false){
      this.setState({
        showSlider: true
      })
    } else {
      this.setState({})
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Resume />
        <ResumeSlider className={
          this.state.showSlider ? "show-slider":
          "hide-slider"
        } />
        <br className="bottom-space"/><br className="bottom-space"/><br className="bottom-space"/><br className="bottom-space"/>
      </div>
    );
  }
}

export default App;
