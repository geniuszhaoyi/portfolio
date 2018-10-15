import React from 'react';
import { connect } from 'react-redux';

// import { resolveInitialLoading } from '../../modules/loading';

function Loading(props) {
    return <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'white' }}>
        Loading...
        {/* <button onClick={() => props.dispatch(resolveInitialLoading('test'))}>Finish</button> */}
    </div>
}

function InitialLoadingContainer(props) {
    return <React.Fragment>
        {props.loading && <Loading />}
        <div style={{ display: (props.loading ? 'none' : 'inline') }}>{props.children}</div>
    </React.Fragment>;
}

function mapStateToProps({ loading }) {
    return { loading: loading.initialLoading };
}

export default connect(mapStateToProps)(InitialLoadingContainer);