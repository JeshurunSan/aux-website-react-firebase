import React from 'react';
import '../../css/lib/client.css';

class Client extends React.Component {
    render() {
        return(
            <div className="wrap">
                <div className="Client">
                    <div className="client-title">Clients</div>
                    <div className="client-wrap">
                    <ClientCard /><ClientCard /><ClientCard /><ClientCard /><ClientCard /><ClientCard />
                    <ClientCard /><ClientCard /><ClientCard /><ClientCard />
                    </div>
                </div>
            </div>
        );
    }
}

const ClientCard =()=> {
    return(
        <div className="clientcard">
            Client Logo here!!!
        </div>
    );
}

export default Client;