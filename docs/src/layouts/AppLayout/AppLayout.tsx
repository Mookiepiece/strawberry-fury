import React, { useContext, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import logo from '🦌/strawberry-fury-LOGO.png';
import { i18nContext, i18nStateContext, Language } from '🦌/utils/i18n';
import { DocRoute, RouteView } from '🦌/utils/RouterView';
import { Button } from 'starfall';
import useBreakpoints from '🦌/utils/useBreakpoints';
import './styles.scss';

const Nav: React.FC<{ i18nState: Language; setI18nState: () => void }> = ({
  i18nState,
  setI18nState,
}) => {
  const i18n = useContext(i18nContext);
  const tablet = useBreakpoints('tablet');
  return (
    <header className="doc-nav">
      <div>
        <Link className="doc-nav-logo-link button-link" to="/">
          <img src={logo} alt="logo" />
          {tablet ? <h3>Strawberry Fury</h3> : null}
        </Link>
        <div>
          <Button primary style={{ width: 120 }} onClick={setI18nState}>
            <sup>文</sup>
            <sub>A</sub>
            <span>&nbsp;&nbsp;&nbsp;{i18nState}</span>
          </Button>
        </div>
      </div>
      <div>
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

const AppLayout: React.FC<{ children: DocRoute[] }> = ({ children }) => {
  const [i18nState, setI18nState] = useContext(i18nStateContext);

  return (
    <ScrollToTop>
      <Nav
        i18nState={i18nState}
        setI18nState={() => setI18nState(i18nState === 'zh' ? 'en' : 'zh')}
      />
      <RouteView routes={children} />
    </ScrollToTop>
  );
};

export default AppLayout;
