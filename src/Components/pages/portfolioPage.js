import React from 'react';
import Footer from './../org/footer';
import Jumbotron from '../mol/jumbotron';
import '../../css/pages/portfolioPage.css';

import { Link } from 'react-router-dom';
import ContactSegment from '../mol/contactsegment';

class PortfolioPage extends React.Component {
    render(){
        return(
            <div className="page-content">
                <Jumbotron />
                <ProjectView />
                <ProjectView />
                <ProjectView />
                <ProjectView />
                <ContactSegment />
                <Footer />
            </div>
        );         
    }
}

const ProjectView =()=> {
    return(
        <div className="ProjectView">
            <div className="wrap">
                <div className="projectview-client">Client Name</div>
                <div className="projectview-title">Project Title, Theme & Slogan</div>
                <Link to="/project">View Case Study <span className="fa fa-chevron-circle-right"/></Link>
            </div>
        </div>
    );
}

export default PortfolioPage;