import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/lib/contact.css';

import Content from '../../Content';

class Contact extends React.Component {
    render() {
        return(
            <div className="Contact">
                <div className="wrap">
                    <div className="contact-wrap">
                        <div className="contact-info">
                            <div className="contact-title">Contact Information</div>
                            <MapCon />
                            <div className="contact-details">
                                <Link to="#">{Content.CompanyEmail}</Link>
                                <p>
                                {Content.CompanyAddress}
                                </p>
                            </div>
                        </div>
                        <ContactCard />
                    </div>
                </div>       
            </div>
        );
    }
}

const MapCon =()=> {
    return(
        <div className="MapCon">
            <span className="fa fa-globe" /> Map Placeholder
            
        </div>
    );
}

const ContactCard =()=>{
    return(
        <div className="contactcard">
            <div className="ccard-title">
                {Content.CCardTitle}
            </div>
            <div className="ccard-desc">
                {Content.CCardDescription}
            </div>
            <div className="ccard-form">
                <div className="ccard-name">Name:<input type="text"></input></div>
                <div className="ccard-email">Email:<input type="text"></input></div>
                <div className="ccard-message">Message:<textarea className="ccard-name"/></div>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Contact;