import React from 'react';
import * as RouterContext from './RouterContext';
import matchPath from '../utils/matchPath';
import { pathToRegexp } from 'path-to-regexp';
import { AnyObject } from '../index.d';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/Switch.md
export default function Switch(props: AnyObject) {
  return (
    <RouterContext.Consumer>
      {(context: AnyObject): React.Component | null => {
        const location = props.location || context.location;

        let element, match;

        React.Children.forEach(props.children, child => {
          if (!match && React.isValidElement(child)) {
            element = child;
            const path = (child as any).props.path || (child as any).props.from;
            match = matchPath(location.pathname, {
              ...(child as any).props,
              path
            });
          }
        });
        // @ts-ignore
        return match
          ? React.createElement(element, { location, computedMatch: match })
          : null;
      }}
    </RouterContext.Consumer>
  );
}
