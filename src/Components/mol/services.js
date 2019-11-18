import React from 'react';

import '../../css/lib/services.css';

class Services extends React.Component {
    render() {
        return(
            <div className="wrap">
                <div className="Services">
                    <div className="services-title">
                        Services
                    </div>
                    <div className="services-wrap">
                        <ServicesLeft />
                        <ServicesRight />
                        <ServicesLeft />
                    </div>
                </div>
            </div>
        );
    }
}

const ServicesLeft =()=> {
    return(
        <div className="serviceleft">
            <div className="service-text">
                <div className="service-title">Web Development</div>
                <div className="service-desc">Sed nec scelerisque risus, at rutrum mauris. Sed et massa et dui hendrerit facilisis. Maecenas commodo eget lacus sed varius. Vestibulum bibendum purus diam, ut hendrerit ex aliquam ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dapibus est nisl, in bibendum tortor iaculis quis. Maecenas semper varius orci, et tincidunt lorem sodales a..</div>
            </div>
            <div className="service-img"><span className="fa fa-image" />Image</div>
        </div>
    );
}

const ServicesRight =()=> {
    return(
        <div className="serviceright">
            <div className="service-img"><span className="fa fa-image" />Image</div>
            <div className="service-text">
                <div className="service-title">Mobile App Development</div>
                <div className="service-desc">Morbi molestie euismod purus, congue varius lacus vestibulum vel. Duis pretium erat venenatis, viverra velit et, vulputate turpis. Vivamus imperdiet nisi sit amet maximus condimentum. Donec elementum odio id turpis consequat auctor. Ut sagittis posuere dolor id blandit. Donec consectetur, orci vel finibus viverra, mauris massa molestie tortor, eu consectetur arcu orci eget mauris.</div>
            </div>
        </div>
    );
}

export default Services;