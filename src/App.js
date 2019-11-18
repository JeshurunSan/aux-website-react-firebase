import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from "./Components/pages/homePage";
import AboutPage from "./Components/pages/aboutPage";
import PortfolioPage from "./Components/pages/portfolioPage";
import ErrorPage from "./Components/pages/errorPage";
import Project from "./Components/pages/project";
import Dashboard from './Components/pages/dashboard';

import Header from './Components/org/header';

function App() {

  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/project" component={Project} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
