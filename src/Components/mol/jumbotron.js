import React from 'react';
import Share from './../mol/share';
import '../../css/lib/jumbotron.css';
import {Link} from 'react-router-dom';

class Jumbotron extends React.Component {
    render() {
        return(
        <div className="jumbotron">
            <div className="wrap">
                <div className="jumbotron-text">
                   <div className="jumbotron-title">Jumbotron Title</div>
                   <div className="jumbotron-desc">
                   orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia pretium purus, ut varius ipsum consectetur in. Praesent elementum lectus diam, eget suscipit quam viverra id. Phasellus in aliquam metus. Aenean mollis fringilla cursus. Curabitur faucibus metus metus, sit amet tincidunt felis ullamcorper eget. Proin ac ex luctus nibh tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mauris ex, sollicitudin non diam vitae, fringilla sagittis quam. Mauris turpis velit, egestas hendrerit maximus sed, interdum nec urna. Suspendisse interdum, lorem quis aliquam blandit, eros sapien semper dui, vel rutrum purus arcu vitae quam.
                   </div>
                   <Share />
                </div>
                <div className="jumbotron-button">
                    <Link to="/work">Button</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default Jumbotron;