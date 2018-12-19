import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { routerReducer, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'

import reducers from 'redux/reducers'

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(applyMiddleware(middleware, thunk)
));
