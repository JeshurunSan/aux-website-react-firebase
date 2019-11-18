import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/lib/gallerypreview.css';

class GalleryPreview extends React.Component {
    
    render() {
        return(
            <div className="wrap">
            <div className="gallerypreview">
               
                    <div className="gallery-header">
                        <div className="title">
                            Our Work
                        </div>
                        <div className="extension">
                            <Link to="/portfolio">See All <span class="fa fa-arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="gc-wrap">
                        <GCard /><GCard /><GCard /><GCard /><GCard /><GCard />
                    </div>
            </div>
            </div>
        );
    }
}

const GCard =()=>{

    return(
        <div className="GCard"><span className="fa fa-image" />Image</div>
    );
}

export default GalleryPreview;