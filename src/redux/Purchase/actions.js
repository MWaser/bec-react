import * as actionTypes from "./actionTypes";
import axios from 'axios';

export function logAdd(severity, message) { axios.post('/api/log/add', { app: 'BEC Purchase', severity: severity, message: message }); }
export function setUser(user) { return { type: actionTypes.SET_USER, payload: user } }

export function saveUser(user) {
    return dispatch => {
        axios.post('/api/user/chgstatus', { email: user.email, status: user.status })
            .then(() => { dispatch({ type: actionTypes.SET_USER, payload: user }); })
    }
}

export function civic(event) {
    return dispatch => {
        dispatch({ type: actionTypes.SET_LOADING, payload: { loading: true } });
        axios.post('/api/user/login', { JWT: event.response }).then( (response2) => {
            dispatch({ type: actionTypes.SET_USER, payload: response2.data });
        }).catch(err => { alert('ERROR: ' + err); dispatch({ type: actionTypes.SET_LOADING, payload: { loading: false } }); })
    };
}

export function mockLogin() {
    return dispatch => {
        dispatch({ type: actionTypes.SET_LOADING, payload: { loading: true } });
        axios.post('/api/user/login', { mock: true }).then((response2) => {
            dispatch({ type: actionTypes.SET_USER, payload: response2.data });
        }).catch(err => { alert('ERROR: ' + err); dispatch({ type: actionTypes.SET_LOADING, payload: { loading: false } }); })
    };
}

export function createEnv(user) {
    return dispatch => {
        dispatch({ type: actionTypes.SET_LOADING, payload: { loading: true } });
        axios.post('/api/docusign/createEnv', { user: user }).then(response => {
            user.envelopeId = response.data.envelopeId;
            user.status = 'infoDone'
            axios.post('/api/user/chgstatus', { email: user.email, status: user.status }).then(() => {
                dispatch({ type: actionTypes.SET_USER, payload: user });
            })
        }).catch(err => {
            alert(err);
            dispatch({ type: actionTypes.SET_LOADING, payload: { loading: false } });
        })
    };
}

export function getSignURL(user) {
    return dispatch => {
        dispatch({ type: actionTypes.SET_LOADING, payload: { loading: true } });
        axios.post('/api/docusign/getSignURL', { user: user }).then(response => {
            dispatch({ type: actionTypes.SET_LOADING, payload: { loading: false } });
            window.location = response.data.url;
        });
    };
}

export function saveBank(user) {
    return dispatch => {
        axios.post('/api/user/chgbank', { email: user.email, bank: user.bankInfo }).then(() => {
            dispatch({ type: actionTypes.SET_USER, payload: user });
        })
    }
}
