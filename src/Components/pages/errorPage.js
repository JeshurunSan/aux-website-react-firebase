import React from 'react';
import ContactSegment from './../mol/contactsegment';
import Footer from './../org/footer';

import '../../css/pages/errorPage.css';

class ErrorPage extends React.Component {
    render(){
        return(
            <div className="page-content">
                <div className="error-text">
                <p><span className="fa fa-exclamation-triangle"/>Error: Sorry Page not found!</p>
                </div>
                <ContactSegment />
                <Footer />
            </div>
        );
    }
}

export default ErrorPage;