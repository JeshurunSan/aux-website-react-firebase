import React from 'react';

import ContactSegment from '../mol/contactsegment';
import Footer from '../org/footer';
import Share from './../mol/share';

import '../../css/pages/project.css';

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
                    <span className="fa fa-arrow-left"/> Previous Page
                </div>
                <div className="projectheader-icon">
                    <div className="projectheader-logo">
                        <span className="fa fa-cubes"/>
                    </div>
                    <div className="projectheader-title">
                        Project Title
                    </div>
                    <div className="projectheader-tagline">
                        Lorem ipsum dolor sit amet. Conse!
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
                        Project Title App
                    </div>
                    <div className="projectcontent-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <PSegmentIMG />
                <PSegmentHalfL />
                <PSegmentIMG />
                <PSegmentIMG />
                <PSegmentHalfR />
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
                <div className="PSegment-txt">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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
                <div className="PSegment-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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