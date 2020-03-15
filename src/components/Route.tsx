import React from 'react';
import * as RouterContext from './RouterContext';
// import { matchPath } from 'utils/matchPath';
import { AnyObject, AnyFunction } from 'src/index.d';

// route type
export interface IRoute {
	path: string | string[];
	component: React.ComponentType | React.ElementType | AnyFunction;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  location?: AnyObject;
  render?: AnyFunction;
	[key: string]: any;
}

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/Route.md
export default function Route(props: IRoute) {
  return (
    <RouterContext.Consumer>
      {(context: AnyObject): React.Component | null => {
        const { component: Component, path, render, children } = props;
        const location = props.location || context.location;

        if (path === location.pathname) {
          // @ts-ignore
          return <Component {...context} />;
        }
        const match = context.match;
        const value = { ...context, location, match };
        return null;
        // return (
        //   <RouterContext.Provider
        //     value={value}
        //   >
        //     {null}
        //   </RouterContext.Provider>
        // );
      }}
    </RouterContext.Consumer>
  );
}
