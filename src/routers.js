import React from 'react';

import { Route } from 'react-router-dom';

import { Home, Users } from './containers';

export default () => {
    return (
        <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/users" component={Users} />
        </div>
    );
}