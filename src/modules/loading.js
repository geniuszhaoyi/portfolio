export const SET_INITIAL_LOADING = 'loading/SET_INITIAL_LOADING'
export const RESOLVE_INITIAL_LOADING = 'loading/RESOLVE_INITIAL_LOADING';
export const ERROR_INITIAL_LOADING = 'loading/ERROR_INITIAL_LOADING';

const initialState = {
    initialLoading: true,
    loading: {},
}

export default (state = initialState, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_INITIAL_LOADING:
            state.loading[action.name] = action.status;
            state.initialLoading = true;
            return state;
        case RESOLVE_INITIAL_LOADING:
            delete state.loading[action.name];
            if (Object.keys(state.loading).length === 0) {
                state.initialLoading = false;
            }
            return state;
        default:
            return state
    }
}

export function setInitialLoading(name) {
    return {
        type: SET_INITIAL_LOADING,
        name,
    }
}

export function resolveInitialLoading(name, status) {
    return {
        type: RESOLVE_INITIAL_LOADING,
        name,
    }
}

export function errorInitialLoading(name, status) {
    return {
        type: ERROR_INITIAL_LOADING,
        name,
    }
}