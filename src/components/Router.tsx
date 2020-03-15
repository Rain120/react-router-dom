import React, { useState, useEffect } from 'react';
import * as RouterContext from './RouterContext';
import { AnyObject, NullFunction } from 'src/index.d';

// router type
export interface IRouter {
	history?: IHistory;
	children: any;
}

// router props history type
export interface IHistory {
	[key: string]: any;
}

// router props location type
// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/location.md
export interface ILocation {
	pathname: string;
	search: string;
	hash: string;
	state: AnyObject | undefined;
}

// router props match type
export interface IMatch {
	path: string;
	url: string;
	params: AnyObject;
	isExact: boolean;
}

function computeRootMatch(pathname: string): IMatch {
  return {
    path: '/',
    url: '/',
    params: {},
    isExact: pathname === '/'
  };
}

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/Router.md
export default function Router(props: any) {
  let _isMounted: boolean = false;
  let _pendingLocation: AnyObject | null = null;
  let unlisten: NullFunction | null = null;
  const { children, history = {}, staticContext = {} } = props;
  const [location, setLocation] = useState(history.location);
  if (!props.staticContext && props.history) {
    unlisten = props.history.listen(location => {
      if (_isMounted) {
        setLocation({ location });
      } else {
        _pendingLocation = location;
      }
    });
  }

  useEffect(() => {
    _isMounted = true;
    if (_pendingLocation) {
      setLocation({ location: _pendingLocation });
    }
    return () => {
      unlisten && unlisten();
    };
  }, [location]);

  return (
    <RouterContext.Provider
      children={children || null}
      value={{
        history,
        location,
        staticContext,
        match: computeRootMatch(location ? location.pathname : location)
      }}
    />
  );
}
