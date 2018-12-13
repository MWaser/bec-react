import React from 'react';

import { withRouter } from 'react-router-dom';

import Routers from './routers';

const App = () => {
  return <Routers />;
};

export default withRouter(App);
