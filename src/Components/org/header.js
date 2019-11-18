import React from 'react';
import Logo from '../atm/logo';
import Navigation from '../mol/nav';

import '../../css/lib/header.css';

class Header extends React.Component {

    render() {
        return(
            <div className="Header">
                <div className="wrap">
                <Logo /><Navigation />
                </div>
            </div>
        );
    }
}

export default Header;