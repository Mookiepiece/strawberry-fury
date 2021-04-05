import React from 'react';
import { Collapse, Button } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <style>{`
        .🍿🥪🎇🧶🧧:not(:first-child) {
          margin-top: -1px;
        }
        .🍿🥪🎇🧶🧧.active {
          color: var(--color-primary) !important;
        }
    `}</style>
      <Collapse>
        <Collapse.Item>
          <Collapse.Summary>
            <Button className="🍿🥪🎇🧶🧧">You dont know about me</Button>
          </Collapse.Summary>
          <Collapse.Panel>
            <p>But I bet you want to</p>
            <div style={{ width: 100, height: 100, background: 'aliceblue' }}></div>
          </Collapse.Panel>
        </Collapse.Item>
        <Collapse.Item>
          <Collapse.Summary>
            <Button className="🍿🥪🎇🧶🧧">You dont know about me</Button>
          </Collapse.Summary>
          <Collapse.Panel>
            <p>But I bet you want to</p>
          </Collapse.Panel>
        </Collapse.Item>
        <Collapse.Item>
          <Collapse.Summary>
            <Button className="🍿🥪🎇🧶🧧">You dont know about me</Button>
          </Collapse.Summary>
          <Collapse.Panel>
            <p>But I bet you want to</p>
          </Collapse.Panel>
        </Collapse.Item>
        <Collapse.Item>
          <Collapse.Summary>
            <Button className="🍿🥪🎇🧶🧧">You dont know about me</Button>
          </Collapse.Summary>
          <Collapse.Panel>
            <p>But I bet you want to</p>
          </Collapse.Panel>
        </Collapse.Item>
      </Collapse>
    </>
  );
};
export default BasicUsage;
