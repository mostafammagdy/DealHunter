import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
);

export default PrivateRoute;
