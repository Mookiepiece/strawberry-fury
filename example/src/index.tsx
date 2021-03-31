import React, { useState } from 'react';
import { render } from 'react-dom';
import { StCollapse, StForm, StInput } from 'starfall';
import 'starfall/src/_theme/common.scss';
import 'strawberry-fury/src/_theme/common.scss';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({ name: 'uuuu' });
  return (
    <>
      <button onClick={() => setActive(!active)}>toggle</button>
      <StCollapse.Panel active={active}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero iste quis,
          reprehenderit inventore dolorum maxime totam sed! Voluptates consectetur laudantium
          dolores itaque cumque rem molestias labore recusandae, harum ullam.
        </p>
        <StForm<{
          name: string;
        }>
          onSubmit={alert}
          value={form}
          onChange={setForm}
        >
          <StForm.Item label="Name" name="name" rules={[{ required: true }]}>
            <StInput />
          </StForm.Item>
        </StForm>
      </StCollapse.Panel>
    </>
  );
};

render(<App />, document.getElementById('app'));
