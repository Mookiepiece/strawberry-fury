import React, { useMemo } from 'react';
import { Redirect, Route, Switch } from 'react-router';

export type DocRoute =
  | {
      path: string;
      exact?: true;
      redirect: string;
    }
  | {
      path: string;
      exact?: true;
      component: React.FC<{ children: DocRoute[] }>;
      children?: DocRoute[];
    };

/**
 * Note that do not using a react component as RouteView like Vue
 * because Routes should be the children of a Switch, not descendants.
 */
export const RouteView: React.FC<{ routes: DocRoute[] }> = ({ routes }) => {
  const components = useMemo(() => {
    return routes.map(route => {
      if ('component' in route) {
        const { component: C, children, ...rest } = route;
        const component = () => <C>{children || []}</C>;
        return {
          component,
          ...rest,
        };
      }
      return route;
    });
  }, [routes]);

  return components.length ? (
    <Switch>
      {components.map(route => {
        if ('redirect' in route) {
          const { path, exact, redirect } = route;
          return <Redirect key={path} from={path} exact={exact} to={redirect} />;
        }
        const { path, exact, component } = route;
        return <Route key={path} path={path} exact={exact} component={component} />;
      })}
    </Switch>
  ) : null;
};
