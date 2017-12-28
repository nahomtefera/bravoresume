import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Resume from './components/resume/resume';
import ResumeSlider from './components/resumeslider/resumeslider';
import create_pdf from './resumes/create_pdf';
import fancy_resume from './resumes/fancy_resume';
import beautiful_resume from './resumes/beautiful_resume';
import clean_resume from './resumes/clean_resume';
import structured_resume from './resumes/structured_resume';
import leftbar_resume from './resumes/leftbar_resume';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AboutUs from './about_us/about_us';
import ContactUs from './contact_us/contact_us';
import CareerDevelopment from './career_development/career_development'
import './styles/normalize.css';
import './styles/app_mobile.css';
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
    var prevState = resumeInfo;
    this.setState({
      pdfToDownload: prevState
    });
    this.showSlider()
  }

  createPdf(resumeType) {
    this.closeSlider();
    
    resumeType(this.state.pdfToDownload);
    this.setState({
      showSlider: false,
    })
    // console.log("createPdf from appjs: ", this.state.pdfToDownload)
    
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

        <Router key={Math.random()} history={ createBrowserHistory()} >
          <div> 
            {/*  H  E  A  D  E  R  */}
            <Header /> 
            {/* P A G E    C O N T E N T  */}
            <Switch>
              <Route exact path="/" render={()=>
                <Resume getResume={this.getResume} />
              }/>
              <Route path="/about_us" component={AboutUs}/>
              <Route path="/contact_us" component={ContactUs}/>
              <Route path="/career_development" component={CareerDevelopment}/>
            </Switch>
          </div>
        </Router>
        <ResumeSlider className={ this.state.showSlider ? "fadein":"hide-slider"}
            closeSlider={this.closeSlider}
            createPdf={this.createPdf}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
