import React from 'react';
import { connect } from 'react-redux';

import './index.css';
import Metropolitan from '../../materials/IMG_1153.png';
import Husky from '../../materials/IMG_1141.jpg';
import House from '../../materials/IMG_1140.jpg';

import InitialLoadingContainer from '../InitialLoadingContainer';
import CoverPage from '../CoverPage';
import Section, { SectionOneColumn } from './section';
import SayHello from '../sayHello';
import Footer from '../Footer';
import { setInitialLoading, resolveInitialLoading, errorInitialLoading } from '../../modules/loading';

class ImageWithLoading extends React.Component {
    componentDidMount() {
        this.props.dispatch(setInitialLoading(this.props.name));
    }
    handleImageLoaded() {
        this.props.dispatch(resolveInitialLoading(this.props.name));
    }
    handleImageErrored() {
        this.props.dispatch(errorInitialLoading(this.props.name));
    }
    render() {
        var { dispatch, ...other } = this.props;
        return <img {...other}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
        />
    }
}

ImageWithLoading = connect()(ImageWithLoading);

class Home extends React.Component {
    render() {
        return (<InitialLoadingContainer>
            <div className="MainPageContainer" style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', overflowX: 'hidden' }}>
                <div>
                    <CoverPage />
                </div>
                <div>
                    <Section left={
                        <ImageWithLoading name='Metropolitan' src={Metropolitan} style={{ width: '100%' }} alt="Metropolitan" />
                    } right={
                        <span>Metropolitan Museum of Art</span>
                    } />
                    <Section left={
                        <span>Me with Husky</span>
                    } right={
                        <ImageWithLoading src={Husky} style={{ width: '100%' }} alt="Husky" />
                    } />
                    <SectionOneColumn>
                        <ImageWithLoading src={House} style={{ width: '100%' }} alt="Husky" />
                    </SectionOneColumn>
                    <SectionOneColumn>
                        <SayHello />
                    </SectionOneColumn>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </InitialLoadingContainer>);
    }
}

export default Home;
