import React from 'react';
import { createHashHistory as createHistory } from 'history';
import Router, { IRouter } from './Router';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/HashRouter.md
export default function HashRouter(props: IRouter) {
  const history = createHistory(props.history);

  return <Router history={history} children={props.children} />;
}
