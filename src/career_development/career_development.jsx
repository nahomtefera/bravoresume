import React, {Component} from 'react';
import './career_development.css';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';
import EntryOne from './blog_entries/entry_one/entry_one';
import EntryTwo from './blog_entries/entry_two/entry_two';
import EntryThree from './blog_entries/entry_three/entry_three';


class CareerDevelopment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog_entries: [
                {
                    title: "First New Entry",
                    path: "/career_development/EntryOne",
                    component: EntryOne,
                    description: "On this break through article, the author shows us how to prepare for an interview and work towards greatness.",
                    img: require('./blog_entries/images/img_one_v2.jpg'),
                    date: "Dec / 20 / 2017",
                    key: 1
                },
                {
                    title: "Second Entry",
                    path: "/career_development/EntryTwo",
                    component: EntryTwo,
                    description: "On this break through article, the author shows us how to prepare for an interview and work towards greatness.",
                    img: require('./blog_entries/images/img_two_v2.jpg'),
                    date: "Dec / 20 / 2017",
                    key: 2
                },
                {
                    title: "Third Entry",
                    path: "/career_development/EntryThree",
                    component: EntryThree,
                    description: "On this break through article, the author shows us how to prepare for an interview and work towards greatness.",
                    img: require('./blog_entries/images/img_three.jpg'),
                    date: "Dec / 20 / 2017",
                    key: 3
                }
            ]
        }
    }

    render(){
        return(
            <div>              
                <Router key={Math.random()} history={ createBrowserHistory()} >
                    <div className="blog-entries-container"> 
                        <Switch>
                            <Route exact path="/career_development" render={
                                ()=>{
                                    return(
                                        this.state.blog_entries.map((blog_entry)=>{
                                            return(

                                                <Link key={blog_entry.key} to={blog_entry.path}>
                                                    <div className="blog-entry" >
                                                        <img className="blog-entry-img" src={blog_entry.img} alt="person"/>
                                                        <h4 className="blog-entry-title">{blog_entry.title}</h4>
                                                        <p className="blog-entry-description">{blog_entry.description}</p>
                                                        <p className="blog-entry-date">{blog_entry.date}</p>
                                                    </div>
                                                </Link>

                                            )
                                        })
                                    )
                                }
                            }/>
                            
                            {this.state.blog_entries.map((blog_entry)=>{
                                return (
                                    <Route 
                                        key={blog_entry.key} 
                                        path={blog_entry.path} 
                                        component={blog_entry.component}
                                    />                                    
                                )
                            })
                            }
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default CareerDevelopment;