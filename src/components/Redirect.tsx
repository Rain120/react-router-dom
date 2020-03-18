import React, { useContext } from 'react';
import * as RouterContext from './RouterContext';
import { AnyObject } from '../index.d';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/Redirect.md
export default function Redirect(props) {
  const ctx: AnyObject= useContext(RouterContext);
  const { history, location } = ctx;
  const {to, from } = props;
  if (!from || from === location.pathname) {
    history.push(to);
  }

  return null;
}
