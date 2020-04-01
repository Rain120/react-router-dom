import React, { useContext } from 'react';
import * as RouterContext from './RouterContext';
import { AnyObject } from '../index.d';

interface RedirectProps {
  to?: string;
  from?: string;
  pathname?: string;
}

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/Redirect.md
const Redirect:React.FC<RedirectProps> = ({ to, from }) => {
  return (
    <RouterContext.Consumer>
      {(context: AnyObject) => {
        const { history, location } = context;
        if (context) {
          if (!from || from === location.pathname) {
            history.push(to);
          }
        }
        return null;
      }}
    </RouterContext.Consumer>
  );
}

export default Redirect;
