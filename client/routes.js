import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { UserAuthWrapper } from 'redux-auth-wrapper';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
    predicate: auth => auth.isAuthenticated,
    redirectAction: history.push,
    failureRedirectPath: '/login',
    wrapperDisplayName: 'UserIsAuthenticated'
});

export default (
  <Route>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={UserIsAuthenticated(Dashboard)} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
