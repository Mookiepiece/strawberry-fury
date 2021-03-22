import React, { useState } from 'react';
import { render } from 'react-dom';
import { Testaa, Collapse, StForm, StInput } from 'strawberry-fury';
console.log(1);

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({ name: 'uuuu' });
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
        <StForm action={alert} value={form} onChange={setForm}>
          <StForm.Item label="Name" name="name" rules={[{ required: true }]}>
            <StInput />
          </StForm.Item>
        </StForm>
      </Collapse.Panel>
    </>
  );
};

render(<App />, document.getElementById('app'));
