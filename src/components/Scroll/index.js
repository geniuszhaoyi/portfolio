import React, { Component } from 'react'

import PageScroll from '../PageScroll'
import firstImage from './first.jpg'
import mainImage from './main.jpg'

class Scroll extends Component {
    state = {
        height: '600px',
        width: '800px',
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        var height = window.innerHeight + 'px';
        var width = window.innerWidth + 'px';
        this.setState({ height, width });
    }
    render() {
        return (<PageScroll {...this.state} firstPage={
            < img src={firstImage} style={{ width: '100%' }} alt="First Page" />
        }>
            <img src={mainImage} style={{ width: '100%' }} alt="Main Page" />
        </PageScroll >)
    }
}

export default Scroll;
