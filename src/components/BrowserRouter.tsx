import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import Router, { IRouter } from './Router';

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/BrowserRouter.md
export default function BrowserRouter(props: IRouter) {
  const history = createHistory(props.history);

  return <Router history={history} children={props.children} />;
}
