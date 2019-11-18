import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/lib/logo.css';

class Logo extends React.Component {
    render() {
        return(
            <div className="Logo">
                <Link to="/"><b>A</b><em>UX</em><i>.</i></Link>
            </div>
        );
    }
}

export default Logo;