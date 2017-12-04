import React, { Component } from 'react';
import Header from './components/header/header'
import Resume from './components/resume/resume';
import ResumeSlider from './components/resumeslider/resumeslider';
import create_pdf from './create_pdf';
import fancy_resume from './fancy_resume';
import beautiful_resume from './beautiful_resume';
import clean_resume from './clean_resume';
import structured_resume from './structured_resume';
import leftbar_resume from './leftbar_resume';


// import './styles/reset.css'
import './styles/normalize.css'
import './styles/app_mobile.css'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showSlider: false,
      pdfToDownload: []
    }

    this.showSlider = this.showSlider.bind(this);
    this.createPdf = this.createPdf.bind(this);
    this.getResume = this.getResume.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.closeSlider = this.closeSlider.bind(this);
  }

  getResume(resumeInfo){
    var prevState = this.state.pdfToDownload;
    prevState.push(resumeInfo)
    this.setState({
      pdfToDownload: prevState
    });

    this.showSlider()
  }

  createPdf(resumeType) {
    resumeType(this.state.pdfToDownload[0]);
    this.setState({
      showSlider: false,
    })
  }

  showSlider(){
    if(this.state.showSlider === false){
      this.setState({
        showSlider: true
      })
    } else {
      this.setState({
        showSlider: false
      })
    }
  }

  closeSlider(){
    this.setState(
      {
        showSlider:false
      }
    )
  }

  escFunction(event) {
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
      this.closeSlider()
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Resume getResume={this.getResume}
        />
        <ResumeSlider 
          className={
            this.state.showSlider ? "show-slider fadein":
            "hide-slider"
          }
          createPdf={this.createPdf}
        />
        <br className="bottom-space"/><br className="bottom-space"/><br className="bottom-space"/><br className="bottom-space"/>
      </div>
    );
  }
}

export default App;
