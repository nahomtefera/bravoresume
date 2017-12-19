import React, {Component} from 'react';
import './career_development.css';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';
import EntryOne from './blog_entries/entry_one/entry_one';


class CareerDevelopment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog_entries: [
                {
                    title: "First New Entry",
                    path: "/career_development/EntryOne",
                    component: EntryOne,
                    img: require('./blog_entries/images/img_one.jpg'),
                    key: 1
                },
                {
                    title: "Second Entry",
                    path: "/career_development/EntryOne",
                    component: EntryOne,
                    img: require('./blog_entries/images/img_two.jpg'),
                    key: 2
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