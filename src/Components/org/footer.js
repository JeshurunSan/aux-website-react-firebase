import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/lib/footer.css';

import Logo from './../atm/logo';

import Content from '../../Content';

class Footer extends React.Component {
        render() {
            return(
                <div className="Footer">
                    <div className="wrap">
                    <Logo />
                    <Contact />
                    <Social />
                    <Copyright />
                    </div>
                </div>
            );
        }
}

const Contact =()=> {
    return(
        <div className="contact">
            <h1>Contact us</h1>
            <p>
            {Content.CompanyEmail}<br/>
            {Content.CompanyAddress}
            </p>
        </div>
    );
}

const Social =()=> {
    return(
        <div className="social">
            <h1>Follow us on</h1>
            <div className="s-links">
                <Link to="#"><i className="fa fa-facebook-square"></i></Link>
                <Link to="#"><i className="fa fa-instagram"></i></Link>
                <Link to="#"><i className="fa fa-linkedin-square"></i></Link>
                <Link to="#"><i className="fa fa-pinterest-square"></i></Link>
            </div>
        </div>
    );
}

const Copyright =()=> {
    return(
        <div className="copyright">
            <Link to="#">SiteMap</Link>
            <Link to="#">Terms and Conditions</Link>
            <Link to="#">Privacy Policy</Link>
            <h2> &copy; 2020 Aux Limited.</h2>
        </div>
    );
}

export default Footer;