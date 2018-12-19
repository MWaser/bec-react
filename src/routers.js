import React from 'react';

import { Route } from 'react-router-dom';

import { Home, Users, Signin, Password } from './containers';

export default () => {
    return (
        <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/users" component={Users} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/password" component={Password} />
        </div>
    );
}