import React, { useContext } from 'react';
import * as RouterContext from './RouterContext';
import matchPath from '../utils/matchPath';
import { AnyObject, AnyFunction, WithParamsFunction } from 'src/index.d';

// route type
export interface IRoute {
  path?: string | string[];
  component: React.ComponentType | React.ElementType | AnyFunction;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  location?: AnyObject;
  render?: any;
  [key: string]: any;
}

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/Route.md
const Route: React.FC<IRoute> = (props: IRoute) => {
  return (
    <RouterContext.Consumer>
      {(context: AnyObject): React.Component | null => {
        const { component: Component, path, render, children } = props;
        const location = props.location || context.location;
        const match = path
          ? matchPath(location.pathname, props)
          : context.match;
        const providerProps = { ...context, location, match };

        // @ts-ignore
        return (
          <RouterContext.Provider value={providerProps}>
            {match
              ? Component
                ? React.createElement(Component, props)
                : render
                ? render(props)
                : null
              : null}
          </RouterContext.Provider>
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Route;
