import React from 'react';

import '../../css/lib/contactsegment.css';
import { Link } from 'react-router-dom';

class ContactSegment extends React.Component {
    render() {
        return(
            <div className="contactsegment">
                <div className="wrap">
                    <div className="contact-txt">
                        <h1>We would like to hear from you!</h1>
                        <p>Quisque facilisis nibh id lorem aliquam efficitur. Sed ante tortor, hendrerit nec faucibus ac, pellentesque sit amet quam. Nunc feugiat metus ac eros facilisis venenatis. Integer nec libero sodales quam ornare dignissim.</p>
                    </div>
                    <div className="contact-btn">
                        <Link to="/about">Contact us</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactSegment;