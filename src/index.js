import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import store from './store';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

const history = createHistory();

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Component />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
