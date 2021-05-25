import React, { useState } from 'react';
import { render } from 'react-dom';
import { Col, Row, Collapse, Form, Input } from 'starfall';
import 'starfall/src/_theme/common.scss';
import 'strawberry-fury/src/_theme/common.scss';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({ name: 'uuuu' });
  return (
    <>
      <button onClick={() => setActive(!active)}>toggle</button>
      <Collapse.Panel active={active}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero iste quis,
          reprehenderit inventore dolorum maxime totam sed! Voluptates consectetur laudantium
          dolores itaque cumque rem molestias labore recusandae, harum ullam.
        </p>
        <Form<{
          name: string;
        }>
          onSubmit={() => alert(1)}
          initialValue={form}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>

        <Col wrap>
          <Row>1</Row>
        </Col>
      </Collapse.Panel>
    </>
  );
};

render(<App />, document.getElementById('app'));
