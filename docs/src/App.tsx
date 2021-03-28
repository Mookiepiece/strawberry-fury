import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Index from '🦌/pages';

import logo from '🦌/strawberry-fury-LOGO.png';
import { getCowboy, i18nContext, i18nStateContext, Language } from './utils/i18n';
import './styles.scss';
import '🦄/_theme/index.scss';

import Button from '🦌/pages/components/Button';
import Dialog from '🦌/pages/components/Dialog';
import StCollapse from '🦌/pages/components/StCollapse';
import StForm from '🦌/pages/components/StForm';
const pages: Record<string, [string, React.FC]> = {
  '/components/button': ['Button', Button],
  '/components/dialog': ['Dialog', Dialog],
  '/components/StCollapse': ['St| Collapse', StCollapse],
  '/components/StForm': ['St| Form', StForm],
};
const Nav: React.FC<{ i18nState: Language; setI18nState: () => void }> = ({
  i18nState,
  setI18nState,
}) => {
  const i18n = useContext(i18nContext);
  return (
    <header className="doc-nav">
      <Link className="doc-nav-logo-link button-link" to="/">
        <img src={logo} alt="logo" />
        <h3>Strawberry Fury</h3>
      </Link>
      <div>
        <button className="doc-button" style={{ width: 120 }} onClick={setI18nState}>
          <sup>文</sup>
          <sub>A</sub>
          <span>&nbsp;&nbsp;&nbsp;{i18nState}</span>
        </button>
      </div>
      <div className="doc-nav-operations">
        <NavLink className="button-link" to="/index">
          {i18n.NavbarHome}
        </NavLink>
        <NavLink className="button-link" to="/components">
          {i18n.NavbarComponents}
        </NavLink>
      </div>
    </header>
  );
};

const SideBar: React.FC = () => {
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

const ScrollToTop: React.FC = ({ children }) => {
  const location = useLocation();
  const lastValue = useRef<string>('/');
  if (location.pathname !== lastValue.current) {
    lastValue.current = location.pathname;
    window.scrollTo(0, 0);
  }

  return children as React.ReactElement;
};

const App: React.FC = () => {
  const [i18nState, setI18nState] = useState<Language>('zh');
  const [i18n, setI18n] = useState(getCowboy('zh'));

  useEffect(() => {
    setI18n(getCowboy(i18nState));
  }, [i18nState]);

  return (
    <i18nContext.Provider value={i18n}>
      <i18nStateContext.Provider value={i18nState}>
        <Router>
          <Nav
            i18nState={i18nState}
            setI18nState={() => setI18nState(i18nState === 'zh' ? 'en' : 'zh')}
          />
          <Switch>
            <ScrollToTop>
              <Route path="/" exact render={() => <Redirect to="/index" />} />
              <Route path="/index" exact component={Index} />
              <Route
                path="/components"
                render={() => (
                  <main className="doc-content">
                    <SideBar />
                    <Switch>
                      <Route
                        path="/components"
                        exact
                        render={() => <Redirect to="/components/button" />}
                      />
                      {Object.entries(pages).map(([k, [, v]]) => (
                        <Route key={k} path={k} component={v} />
                      ))}
                    </Switch>
                  </main>
                )}
              />
            </ScrollToTop>
          </Switch>
        </Router>
      </i18nStateContext.Provider>
    </i18nContext.Provider>
  );
};

export default App;
