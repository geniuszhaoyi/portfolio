import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './trans.css';

class PageScroll extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.containerRef = React.createRef();
    }
    state = {
        currentSection: 'FIRST',
    }
    handleOnWhell = (e) => {
        let WhellMove = e.deltaY;
        let mainScroll = this.mainRef.current.scrollTop

        if (WhellMove < 0) {
            console.log('move up');
            if (mainScroll === 0 && this.state.currentSection === 'MAIN') {
                this.setState({
                    currentSection: 'FIRST',
                });
            }
        } else {
            console.log('move down');
            if (this.state.currentSection === 'FIRST') {
                this.setState({
                    currentSection: 'MAIN',
                });
            }
        }

    }
    render() {
        var wrapperTop = 0;
        if (this.state.currentSection === 'FIRST') {
            wrapperTop = "0px";
        } else {
            wrapperTop = '-' + this.props.height;
        }

        return <div
            style={{ 'overflow': 'hidden', 'position': 'relative', 'height': this.props.height, 'width': this.props.width }}
            onWheel={this.handleOnWhell}
            ref={this.containerRef}
        >
            <div style={{ 'top': wrapperTop, 'position': 'relative' }} className='wrapper transition-all-500ms-ease-in-out'>
                <div style={{ 'overflow': 'hidden', 'height': this.props.height }} >
                    {this.props.firstPage}
                </div>
                <div style={{ 'overflowY': 'scroll', 'height': this.props.height }} ref={this.mainRef} >
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}

PageScroll.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    firstPage: PropTypes.element,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
}

export default PageScroll;