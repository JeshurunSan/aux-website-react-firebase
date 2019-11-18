import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/global.css';

import '../../css/lib/nav.css';

class Navigation extends React.Component {
    render() {
        return(
            <div className="Navigation">
                <Link to="/">Home</Link>
                    <Link to="/portfolio">Our Work</Link>
                    <Link to="/about">About</Link>
                <div className="btn-menu" onClick={console.log('isClicked')}><i className="fa fa-bars"></i></div>
            </div>
        );
    }
}

export default Navigation;