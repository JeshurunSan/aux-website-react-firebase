import React from 'react';

import '../../css/pages/aboutPage.css';

import CompanyStaff from '../mol/companystaff';
import Contact from './../org/contact';
import Footer from './../org/footer';
import Share from '../mol/share';

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
                <div className="about-title">About AUX</div>
                <div className="about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra quam at velit luctus mattis. Aenean finibus neque id consectetur molestie. Nullam aliquet leo dolor, a condimentum sapien consequat id. Fusce aliquam, tellus ut bibendum dictum, augue eros iaculis libero, id pharetra sem dolor vestibulum elit. <br /><br />Quisque nec ligula sit amet orci blandit gravida sed sagittis urna. Curabitur pellentesque orci molestie auctor tempor. Morbi eu imperdiet mauris, sit amet ultrices turpis. In eros neque, faucibus id eros vel, consequat efficitur nunc. Suspendisse finibus aliquet neque, et tempus justo suscipit eu. Phasellus sit amet nisl at tortor ultrices pharetra. Aliquam rhoncus urna vitae porttitor feugiat. Donec id pretium nisl. Integer id diam vehicula, porta felis id, accumsan sem. Mauris ornare tellus nec elit lacinia semper.
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