import React from 'react';
import * as RouterContext from './RouterContext';
import { AnyObject, } from 'src/index.d';
// import Route from './Route';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/NavLink.md
export default function withRouter(Component) {
  return (
    // <Route component={Component} />
    <RouterContext.Consumer>
      {(context: AnyObject) => {
        return (props: AnyObject) => {
          const { wrappedComponentRef, ...remainingProps } = props;
          return <Component {...remainingProps} {...context} ref={wrappedComponentRef} />
        }
      }}
    </RouterContext.Consumer>
  );
}
