import React, { useState } from 'react';
import { render } from 'react-dom';
import { Testaa, Collapse } from 'strawberry-fury';
console.log(1);

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Testaa />
      <button onClick={() => setActive(!active)}>toggle</button>
      <Collapse.Panel active={active}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero iste quis,
          reprehenderit inventore dolorum maxime totam sed! Voluptates consectetur laudantium
          dolores itaque cumque rem molestias labore recusandae, harum ullam.
        </p>
      </Collapse.Panel>
    </>
  );
};

render(<App />, document.getElementById('app'));
