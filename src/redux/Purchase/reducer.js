import * as actionTypes from './actionTypes';

const initialState = {
    user: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return Object.assign({}, state, {
                loading: action.payload.loading
            })
        case actionTypes.SET_USER:
            return Object.assign({}, state, {
                loading: false,
                user: action.payload
            })
        default:
            return state;
    }
}
