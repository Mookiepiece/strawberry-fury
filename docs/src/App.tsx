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
import 'starfall/_theme/index.scss';
import Routes from './Routes';

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
        <NavLink className="button-link" to="/sf-components">
          {i18n.NavbarSfComponents}
        </NavLink>
        <NavLink className="button-link" to="/st-components">
          {i18n.NavbarStComponents}
        </NavLink>
      </div>
    </header>
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
              {Routes.map(({ path, exact, component, redirect }) => {
                if (redirect) {
                  return (
                    <Route
                      key={path}
                      path={path}
                      exact={exact}
                      render={() => <Redirect to={redirect} />}
                    />
                  );
                }
                return <Route key={path} path={path} exact={exact} component={component} />;
              })}
            </ScrollToTop>
          </Switch>
        </Router>
      </i18nStateContext.Provider>
    </i18nContext.Provider>
  );
};

export default App;
