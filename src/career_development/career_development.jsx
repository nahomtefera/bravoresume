import React, {Component} from 'react';
import './career_development.css';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';

class Something extends Component {
    render(){
        return (
            <div>
                First Blog Entry
            </div>
        )
    }
}

class BlogOne extends Component {
    render() {
        return (
            <div>
                <span>Blog 1</span>
            </div>
        )
    }
}

class BlogTwo extends Component {
    render() {
        return (
            <div>
                Blog 2
            </div>
        )
    }
}

class CareerDevelopment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog_entries: [
                {
                    title: "Something",
                    path: "/something",
                    component: Something,
                    key: 1
                },
                {
                    title: "Blog 1",
                    path: "/blogone",
                    component: BlogOne,
                    key: 2                    
                },
                {
                    title: "Blog 2",
                    path: "/blogtwo",
                    component: BlogTwo,
                    key: 3                   
                },
            ]
        }
    }

    render(){
        return(
            <div>              
                <Router key={Math.random()} history={ createBrowserHistory()} >
                    <div> 
                        <Switch>
                            <Route exact path="/career_development" render={
                                ()=>{
                                    return(
                                        this.state.blog_entries.map((blog_entry)=>{
                                            return(
                                                <div  key={blog_entry.key}>
                                                    <Link to={blog_entry.path}>{blog_entry.title}</Link>
                                                </div>
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