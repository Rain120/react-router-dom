import React from 'react';
import * as RouterContext from './RouterContext';
import Route from './Route';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/NavLink.md
export default function withRouter(Component) {
  return <Route component={Component} />;
}
