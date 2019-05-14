import React from 'react';

import { Route } from 'react-router-dom';

import { Geolocate, Home, Dashboard, Purchase, Admin, UserReport } from './containers';

export default () => {
    return (
        <div className="app-container">
            <Route exact path="/" component={Geolocate} />
            <Route exact path="/us/" component={Home} />
            <Route exact path="/us/home" component={Home} />
            <Route exact path="/us/dashboard" component={Dashboard} />
            <Route exact path="/us/purchase" component={Purchase} />
            <Route exact path="/nonus/" component={Home} />
            <Route exact path="/nonus/home" component={Home} />
            <Route exact path="/nonus/purchase" component={Purchase} />
            <Route exact path="/nonus/dashboard" component={Dashboard} />
            <Route exact path="/us/utils/userreport" component={UserReport} />
            <Route path="/admin/:page?" component={Admin} />
        </div>
    );
}
