import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

const SideBar: React.FC<{
  pages: Record<string, [string, React.FC]>;
}> = ({ pages }) => {
  return (
    <aside className="doc-aside">
      {Object.entries(pages).map(([k, [v]]) => (
        <div key={k}>
          <NavLink className="button-link" to={k}>
            {[v]}
          </NavLink>
        </div>
      ))}
    </aside>
  );
};

const DocLayout: React.FC<{
  pages: Record<string, [string, React.FC]>;
}> = ({ pages }) => {
  return (
    <main className="doc-content">
      <SideBar pages={pages} />
      <Switch>
        <Route path="/components" exact render={() => <Redirect to="/components/button" />} />
        {Object.entries(pages).map(([k, [, v]]) => (
          <Route key={k} path={k} component={v} />
        ))}
      </Switch>
    </main>
  );
};

export default DocLayout;
