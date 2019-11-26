import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/global.css';

import '../../css/lib/nav.css';

import { slide as Menu } from 'react-burger-menu'
class Navigation extends React.Component {
    render() {
        return(
            <div className="Navigation">
                <Link to="/">Home</Link>
                    <Link to="/portfolio">Our Work</Link>
                    <Link to="/about">About</Link>
                <div className="btn-menu" onClick={console.log('isClicked')}><i className="fa fa-bars"><ToggleMenu /></i></div>
            </div>
        );
    }
}

class ToggleMenu extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/portfolio">Our Work</a>
          <a id="contact" className="menu-item" href="/about">About</a>
        </Menu>
      );
    }
  }

export default Navigation;