import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './Components/NavBarComponent/NavBar.js'
import AboutPage from './Pages/About/AboutPage.js';
import BlogPage from './Pages/Blog/BlogPage.js';
import HomePage from './Pages/Home/HomePage.js';


export class App extends Component {
  render() {
    return (
      <>
       <Router>
               <NavBar />
               
                          <Switch>
                                <Route path="/about" exact>
                                  <AboutPage />
                                </Route>
                                <Route path="/blog" exact>
                                  <BlogPage />
                                </Route>
                                <Route path="/" exact>
                                  <HomePage />
                                </Route>
                            </Switch>
      
        </Router>
      
            
      </>
    )
  }
}

export default App

