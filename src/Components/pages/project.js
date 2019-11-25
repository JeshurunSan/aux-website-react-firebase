import React from 'react';
import { Link } from 'react-router-dom';

import ContactSegment from '../mol/contactsegment';
import Footer from '../org/footer';
import Share from './../mol/share';

import '../../css/pages/project.css';

import Content from '../../Content';

class Project extends React.Component {
    render(){
        return(
            <div className="page-content">
                <ProjectHeader />
                <ProjectContent />
                <ContactSegment />
                <Footer />
            </div>
        );
    }
}

const ProjectHeader =()=>{
    return(
        <div className="projectheader">
           <div className="wrap">
            <div className="projectheader-nav">
                    <Link to="/portfolio"><span className="fa fa-arrow-left"/> Previous Page</Link>
                </div>
                <div className="projectheader-icon">
                    <div className="projectheader-logo">
                        <span className="fa fa-cubes"/>
                    </div>
                    <div className="projectheader-title">
                        {Content.Project.map((PHDesc, index)=>{return(<div>{PHDesc.ProjectHeaderTitle}</div>);})}
                    </div>
                    <div className="projectheader-tagline">
                        {Content.Project.map((PHDesc, index)=>{return(<div>{PHDesc.ProjectHeaderTitle}</div>);})}
                    </div>
                </div>
                <div className="projectheader-links">
                    <Share />
                </div>
           </div>
        </div>
    );
}

const ProjectContent =()=> {
    return(
        <div className="wrap">
            <div className="projectcontent">
                <div className="projectcontent-header">
                    <div className="projectcontent-title">
                        {Content.Project.map((PHDesc, index)=>{return(<div>{PHDesc.ProjectHeaderTitle}</div>);})}
                    </div>
                    <div className="projectcontent-desc">
                        {Content.Project.map((PHDesc, index)=>{return(<div>{PHDesc.ProjectContentDescription}</div>);})}
                    </div>
                </div>
                <PSegmentIMG />
                <PSegmentHalfL />
                <PSegmentIMG />
                <PSegmentIMG />
                <PSegmentHalfR /    >
                <Footnote />
            </div>
        </div>
    );
}

const PSegmentIMG =()=> {
    return (
        <div className="wrap">
            <div className="PSegmentIMG">
                <span className="fa fa-image" />Image
            </div>
        </div>
    );
}

const PSegmentHalfL =()=> {
    return (
        <div className="wrap">
            <div className="PSegmentHalfL">
                <div className="PSegment-img">
                <span className="fa fa-image" />Image
                </div>
                <div className="PSegment-txt">{Content.Project.map((PHDesc, index)=>{return(<div>{PHDesc.PSegmentHalfLText}</div>);})}</div>
            </div>
        </div>
    );
}

const PSegmentHalfR =()=> {
    return (
        <div className="wrap">
            <div className="PSegmentHalfR">
                <div className="PSegment-img">
                <span className="fa fa-image" />Image
                </div>
                <div className="PSegment-txt">{Content.Project.map((PHDesc, index)=>{return(<div>{PHDesc.PSegmentHalfRText}</div>);})}</div>
            </div>
        </div>
    );
}

const Footnote =()=> {
    return(
        <div className="wrap">
            <div className="Footnote">
               <p>Notes</p>
               <ul>
                   <li>1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                   <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                   <li>3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
                   <li>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
               </ul>
            </div>
        </div>
    );
}

export default Project;