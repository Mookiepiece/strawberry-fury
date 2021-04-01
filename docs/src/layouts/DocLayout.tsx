import React from 'react';
import { NavLink } from 'react-router-dom';
import { DocRoute, RouteView } from '🦌/utils/RouterView';

const SideBar: React.FC<{
  nav: Record<string, string>;
}> = ({ nav }) => {
  return (
    <aside className="doc-aside">
      {Object.entries(nav).map(([k, v]) => (
        <div key={k}>
          <NavLink className="button-link" to={k}>
            {v}
          </NavLink>
        </div>
      ))}
    </aside>
  );
};

const DocLayout: React.FC<{
  children: DocRoute[];
  nav: Record<string, string>;
}> = ({ nav, children }) => {
  return (
    <main className="doc-content">
      <SideBar nav={nav} />
      <RouteView routes={children} />
    </main>
  );
};

export default DocLayout;
