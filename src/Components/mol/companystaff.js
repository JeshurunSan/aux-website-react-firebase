import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/lib/companystaff.css';

class CompanyStaff extends React.Component {
    render() {
        return(
            <div className="wrap">
                <div className="companystaff">
                    <div className="companystaff-title">
                        Company Staff
                    </div>
                    <div className="companystaff-gallery">
                        <Profile /><Profile /><Profile /><Profile /><Profile /><Profile />
                    </div>
                </div>
            </div>
        );
    }
}

const Profile =()=>{
    return(
        <div className="Profile">
            <div className="profile-photo">
                <span className="fa fa-user" />Staff Photo
            </div>
            <div className="profile-desc">
                <div>
                    <div className="profile-name">Name of Employee</div>
                    <div className="profile-position">Position in the Company</div>
                </div>
                <div className="profile-contact">
                    <Link to="#"><span className="fa fa-phone"></span></Link>
                    <Link to="#"><span className="fa fa-envelope"></span></Link>
                </div> 
            </div>
        </div>
    );
}

export default CompanyStaff;