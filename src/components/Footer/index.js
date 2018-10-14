import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        return (<div style={{ background: 'black', color: 'white', fontSize: '0.75em' }}>
            <div style={{ width: '33%', display: 'inline-block', textAlign: 'left' }}>
                Copyright &copy; 2005 - 2015 {this.props.displayName}. {/* All Rights Reserved. */}
            </div>
            <div style={{ width: '34%', display: 'inline-block', textAlign: 'center' }}>
                <a style={{ color: 'white' }}
                    href={'mailto:' + this.props.emailAddress + '?subject=' + this.props.emailSubject}
                >
                    {this.props.emailAddress}
                </a>
            </div>
            <div style={{ width: '33%', display: 'inline-block', textAlign: 'right' }}>
                <a style={{ color: 'white' }}
                    href={'https://' + this.props.homepageAddress}
                >
                    {this.props.homepageAddress}
                </a>
            </div>
        </div>)
    }
}

function mapStateToProps({ basicInfo }) {
    return { 
        displayName: basicInfo.name.displayName, 
        emailAddress: basicInfo.email.address,
        emailSubject: basicInfo.email.subject,
        homepageAddress: basicInfo.homepage.address,
    }
}

export default connect(mapStateToProps)(Footer);
