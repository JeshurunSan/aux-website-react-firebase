import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/lib/contact.css';

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
                                <Link to="#">hi@aux.nz</Link>
                                <p>
                                Level 5, Cathedral House 48-52 Wyndham Street Auckland, New Zealand
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
                Get in touch!
            </div>
            <div className="ccard-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus dapibus, condimentum diam id, efficitur turpis. In hac habitasse platea dictumst. Morbi luctus ut leo et gravida. Nulla viverra nisl in velit viverra, tristique condimentum sem convallis. Vestibulum dolor elit, aliquam ac cursus nec, rhoncus at velit.
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