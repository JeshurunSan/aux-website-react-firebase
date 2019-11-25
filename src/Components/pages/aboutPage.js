import React from 'react';

import '../../css/pages/aboutPage.css';

import CompanyStaff from '../mol/companystaff';
import Contact from './../org/contact';
import Footer from './../org/footer';
import Share from '../mol/share';

import Content from '../../Content';

class AboutPage extends React.Component {
    render(){
        return(
            <div className="page-content">
                <AboutImg />
                <AboutCompany />
                <CompanyStaff />
                <Contact />
                <Footer />
            </div>
        );
    }
}

const AboutImg =()=> {
    return(
        <div className="aboutimg"><span className="fa fa-image"/>Company Image</div>
    );
}

const AboutCompany =()=>{
    return(
        <div className="wrap">
            <div className="aboutcompany">
            <div className="about-text">
                <div className="about-title">{Content.About.map((AboutDesc, Index)=>{return(<div>{AboutDesc.AboutTitle}</div>);})}</div>
                <div className="about-desc">
                {Content.About.map((AboutDesc, Index)=>{return(<p>{AboutDesc.AboutDescription}</p>);})}
                </div>
                <Share />
            </div>
            <div className="about-fig">
                <span className="fa fa-eye"></span>
                Company Figure
            </div>
        </div>
        </div>
    );
}

export default AboutPage;