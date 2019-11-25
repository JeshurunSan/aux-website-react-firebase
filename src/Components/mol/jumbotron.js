import React from 'react';
import Share from './../mol/share';
import '../../css/lib/jumbotron.css';
import {Link} from 'react-router-dom';

import Content from '../../Content';

class Jumbotron extends React.Component {
    render() {
        return(
        <div className="jumbotron">
            <div className="wrap">
                <div className="jumbotron-text">
        <div className="jumbotron-title">{Content.Jumbotron.map((JMBDesc, Index)=>{return(<div>{JMBDesc.JMBTitle}</div>);})}</div>
                   <div className="jumbotron-desc">
                   {Content.Jumbotron.map((JMBDesc, Index)=>{return(<div>{JMBDesc.JMBDescription}</div>);})}
                   </div>
                   <Share />
                </div>
                <div className="jumbotron-button">
                    <Link to="/work">{Content.Jumbotron.map((JMBDesc, Index)=>{return(<div>{JMBDesc.JMBButton}</div>);})}</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default Jumbotron;