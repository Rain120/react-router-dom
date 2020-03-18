import { pathToRegexp } from 'path-to-regexp';
import { AnyObject } from 'src/index.d';

function compilePath(path: string | string[], options) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = { regexp, keys };

  return result;
}

// https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router/docs/api/matchPath.md
function matchPath(pathname, options: AnyObject = {}): AnyObject {
  if (typeof options === 'string' || Array.isArray(options)) {
    options = { path: options };
  }

  const { path, exact = false, strict = false, sensitive = false } = options;

  const paths = [].concat(path);

  return paths.reduce((matched: any, path: string) => {
    if (!path && path !== '') {
      return null;
    }
    if (matched) {
      return matched;
    }

    const { regexp, keys } = compilePath(path, {
      end: exact,
      strict,
      sensitive
    });
    const match = regexp.exec(pathname);

    if (!match) {
      return null;
    }

    const [url, ...values] = match;
    const isExact = pathname === url;

    if (exact && !isExact) {
      return null;
    }

    return {
      path,
      url: path === '/' && url === '' ? '/' : url,
      isExact,
      params: keys.reduce((memo: AnyObject, key: AnyObject, index: number) => {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

export default matchPath;
