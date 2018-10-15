import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setInitialLoading, resolveInitialLoading } from '../../modules/loading';

function Loading(props) {
    return <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'white' }}>
        {/* <button onClick={() => props.dispatch(resolveInitialLoading('test'))}>Finish</button> */}
    </div>
}

class InitialLoadingContainer extends React.Component {
    render() {
        var props = this.props;
        return <React.Fragment>
            {props.loading && <Loading />}
            <div style={{ display: (props.loading ? 'none' : 'inline') }}>{props.children}</div>
        </React.Fragment>;
    }
}

function mapStateToProps({ loading }) {
    return { loading: loading.initialLoading };
}

export default withRouter(connect(mapStateToProps)(InitialLoadingContainer));