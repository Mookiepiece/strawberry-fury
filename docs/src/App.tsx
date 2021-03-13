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
import Button from '🦌/pages/components/button';
import Dialog from '🦌/pages/components/dialog';
import Collapse from '🦌/pages/components/collapse';

import logo from '🦌/strawberry-fury-LOGO.png';
import { getCowboy, i18nContext, i18nStateContext, Language } from './utils/i18n';
import './styles.scss';
import '🦄/_theme/index.scss';

const Nav: React.FC<{ i18nState: Language; setI18nState: () => void }> = ({
  i18nState,
  setI18nState,
}) => {
  const i18n = useContext(i18nContext);
  return (
    <div className="doc-nav">
      <Link
        className="doc-nav-logo"
        style={{ display: 'flex', alignItems: 'center', float: 'left' }}
        to="/"
      >
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
    </div>
  );
};

const SideBar: React.FC = () => {
  const pages = {
    '/components/button': 'Button',
    '/components/dialog': 'Dialog',
    '/components/collapse': 'Collapse',
  };
  return (
    <aside className="doc-aside">
      {Object.entries(pages).map(([k, v]) => (
        <div key={k}>
          <NavLink className="button-link" to={k}>
            {v}
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

  return children as any;
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
                      <Route path="/components/button" component={Button} />
                      <Route path="/components/dialog" component={Dialog} />
                      <Route path="/components/collapse" component={Collapse} />
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
