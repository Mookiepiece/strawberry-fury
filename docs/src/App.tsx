import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { getCowboy, i18nContext, i18nStateContext, Language } from './utils/i18n';
import '🦌/styles.scss';
import Routes from './routes';
import { RouteView } from '🦌/utils/RouterView';

import '🦄/_theme/index.scss';
import 'starfall/_theme/index.scss';

const App: React.FC = () => {
  const [i18nState, setI18nState] = useState<Language>('zh');
  const [i18n, setI18n] = useState(() => getCowboy('zh'));

  useEffect(() => {
    setI18n(getCowboy(i18nState));
  }, [i18nState]);

  const i18nStateContextValue = useMemo(() => {
    return [i18nState, setI18nState] as [Language, Dispatch<SetStateAction<Language>>];
  }, [i18nState]);
  return (
    <i18nContext.Provider value={i18n}>
      <i18nStateContext.Provider value={i18nStateContextValue}>
        <Router>
          <RouteView routes={Routes} />
        </Router>
      </i18nStateContext.Provider>
    </i18nContext.Provider>
  );
};

export default App;
