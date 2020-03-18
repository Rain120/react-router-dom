import React from 'react';
import * as RouterContext from './RouterContext';
import { AnyObject } from '../index.d';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/Link.md
export default function Link(props: AnyObject) {
  return (
    <RouterContext.Consumer>
      {(context: AnyObject): React.Component | null => {
        let to = props.to || '/';
        to = to.indexOf('/') === 0 ? to : '/' + to;
        Promise.resolve().then(() => context.history.push(to));
        return null;
        // @ts-ignore
        // return (
        //   <a
        //     href={context.type === 'BrowserRouter' ? to : '/#' + to}
        //     onClick={e => {
        //         if (e && e.preventDefault) {
        //             e.preventDefault();
        //         }
        //         context.history.push(to);
        //     }}
        //   >
        //     {props.children}
        //   </a>
        // );
      }}
    </RouterContext.Consumer>
  );
}
