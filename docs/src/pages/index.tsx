import React, { useContext } from 'react';
import { i18nContext } from '🦌/utils/i18n';
import logo from '🦌/strawberry-fury-LOGO.png';
import { useHistory } from 'react-router-dom';
import './index.scss';

const Index: React.FC = () => {
  const i18n = useContext(i18nContext);
  const history = useHistory();

  return (
    <div className="index-page">
      <header>
        <img src={logo} alt="logo" />
        <h2>Strawberry Fury</h2>
        <p>{i18n.IndexPageDesc}</p>
        <button
          className="doc-button"
          style={{ marginTop: 24, padding: '12px 48px' }}
          onClick={() => history.push('/components')}
        >
          {i18n.IndexPageGetStarted}
        </button>
      </header>
    </div>
  );
};

export default Index;
