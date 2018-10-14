import React from 'react';
import { connect } from 'react-redux';

import './index.css';

function IconWithText(props) {
    return <div style={{ color: 'white', margin: '10px 0 10px 20px' }}>
        <div className={"glyphicon " + props.icon} style={{ fontSize: '36px', verticalAlign: 'middle' }} aria-hidden="true" />
        <div className="glyphicon-class" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: "5px" }}>
            {props.children}
        </div>
    </div>
}

class SayHello extends React.Component {
    render() {
        return (<div style={{ background: '#101125', padding: '20px' }}>
            <h2 style={{ color: 'white', marginBottom: '1em', textAlign: 'center' }}>
                Say Hello!
            </h2>
            <div style={{ width: '60%', display: 'inline-block', textAlign: 'left' }}>
                <div>
                    <input className="sayhello-text" type='input' placeholder='Your Name' />
                </div>
                <div>
                    <input className="sayhello-text" type='input' placeholder='Your Email' />
                </div>
                <div>
                    <textarea className="sayhello-text" rows="3" placeholder='Your Message' ></textarea>
                </div>
                <div>
                    <button className="sayhello-btn">Send</button>
                </div>
            </div>
            <div style={{ width: '40%', display: 'inline-block', verticalAlign: 'top' }}>
                <IconWithText icon="glyphicon-map-marker">{this.props.location}</IconWithText>
                <IconWithText icon="glyphicon-earphone">{this.props.phone}</IconWithText>
                <IconWithText icon="glyphicon-envelope">{this.props.emailAddress}</IconWithText>
            </div>
            <div>
            </div>
        </div>)
    }
}

function mapStateToProps({ basicInfo }) {
    return {
        location: basicInfo.location.sampleLocation,
        phone: basicInfo.phone.hashStyle,
        emailAddress: basicInfo.email.address,
    }
}

export default connect(mapStateToProps)(SayHello);
