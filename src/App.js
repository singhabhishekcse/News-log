import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/FooterComponent/Footer.js";
import NewsComponet from "./Components/HomeComponent/NewsComponents/NewsComponet.js";

import NavBar from "./Components/NavBarComponent/NavBar.js";
import AboutPage from "./Pages/About/AboutPage.js";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <NewsComponet pageSize={9} country="in" category="general" />
            </Route>
            <Route path="/general" key="general" exact>
              <NewsComponet pageSize={9} country="in" category="general" />
            </Route>
            <Route path="/business" key="business" exact>
              <NewsComponet pageSize={9} country="in" category="business" />
            </Route>
            <Route path="/entertainment" key="entertainment" exact>
              <NewsComponet
                pageSize={9}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route path="/health" key="health" exact>
              <NewsComponet pageSize={9} country="in" category="health" />
            </Route>
            <Route path="/science" key="science" exact>
              <NewsComponet pageSize={9} country="in" category="science" />
            </Route>
            <Route path="/sports" key="sports" exact>
              <NewsComponet pageSize={9} country="in" category="sports" />
            </Route>
            <Route path="/technology" key="technology" exact>
              <NewsComponet pageSize={9} country="in" category="technology" />
            </Route>

            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
