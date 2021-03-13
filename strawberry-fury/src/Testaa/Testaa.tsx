import React, { useEffect, useState } from 'react';
import getDateNow from '🦄/_utils/getDateNow';

const Testaa: React.FC = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    (async () => {
      const t = await getDateNow();
      setState(t);
    })();
  });

  return <p>{state}</p>;
};

export default Testaa;
