import React from 'react';

import './index.css';
import Metropolitan from '../../materials/IMG_1153.png';
import Husky from '../../materials/IMG_1141.jpg';
import House from '../../materials/IMG_1140.jpg';

import CoverPage from '../CoverPage';
import Section, { SectionOneColumn } from './section';
import SayHello from '../sayHello';
import Footer from '../Footer';

class Home extends React.Component {
    render() {
        return (<div style={{ maxWidth: '1000px', minWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div>
                <CoverPage />
            </div>
            <div>
                <Section left={
                    <img src={Metropolitan} style={{ width: '100%' }} alt="Metropolitan" />
                } right={
                    <span>Metropolitan Museum of Art</span>
                } />
                <Section left={
                    <span>Me with Husky</span>
                } right={
                    <img src={Husky} style={{ width: '100%' }} alt="Husky" />
                } />
                <SectionOneColumn>
                    <img src={House} style={{ width: '100%' }} alt="Husky" />
                </SectionOneColumn>
                <SectionOneColumn>
                    <SayHello />
                </SectionOneColumn>
            </div>
            <div>
                <Footer />
            </div>
        </div>);
    }
}

export default Home;
