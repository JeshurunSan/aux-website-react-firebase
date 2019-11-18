import React from 'react';
import { Link } from 'react-router-dom'; 

import '../../css/lib/share.css';

class Share extends React.Component {
    render () {
        return(
            <div className="share">
                    <Link to="#"><span className="fa fa-facebook-square"></span></Link>
                    <Link to="#"><span className="fa fa-twitter-square"></span></Link>
                    <Link to="#"><span className="fa fa-share-alt"></span></Link>
                    <Link to="#"><span className="fa fa-envelope"></span></Link>
            </div>
        )
    }
}

export default Share;