import React from 'react';
import { connect } from 'react-redux';

import firstImage from '../../materials/IMG_1143_cut.jpg';

class CoverPage extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }
    state = {
        width: 1000,
    }
    onResize = () => {
        var width = this.containerRef.current.clientWidth;
        this.setState({ width })
    }
    componentDidMount() {
        window.addEventListener("load", this.onResize);
        window.addEventListener("resize", this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener("load", this.onResize);
        window.removeEventListener("resize", this.onResize);
    }
    render() {
        return <div style={{ position: 'relative' }}>
            <img src={firstImage} style={{ width: '100%' }} alt="First Page" />
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }} ref={this.containerRef} >
                <div style={{ position: 'absolute', top: '20%', left: '15%', fontSize: (this.state.width / 1000 * 56) }}>
                    {this.props.name.firstName} {this.props.name.lastName}
                </div>
                <div style={{ position: 'absolute', top: '35%', left: '15%', fontSize: (this.state.width / 1000 * 40) }}>
                    {this.props.coverPageTitle}
                </div>
            </div>
        </div>
    }
}


function mapStateToProps({ basicInfo }) {
    return { ...basicInfo }
}

export default connect(mapStateToProps)(CoverPage);
