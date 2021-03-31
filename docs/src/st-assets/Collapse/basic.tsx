import React from 'react';
import { Collapse } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <style>{`
      p.🍿🥪🎇🧶🧧 {
        margin:0;
        border: 1px solid var(--color-primary);
        padding: 12px;
        cursor: pointer;
        user-select: none;
      }
      p.🍿🥪🎇🧶🧧:not(:first-child) {
        margin-top: -1px;
      }
      p.🍿🥪🎇🧶🧧.active {
        color: var(--color-primary);
      }
      p.🍿🥪🎇🧶🧧 span {
        margin-left: 20px;
        display: inline-block;
        transition: all .3s;
      }
      p.🍿🥪🎇🧶🧧.active span{
        transform: rotate(.5turn);
      }
    `}</style>
      <Collapse>
        <Collapse.Item>
          <Collapse.Summary>
            <p className="🍿🥪🎇🧶🧧">
              You dont know about me<span>↓</span>
            </p>
          </Collapse.Summary>
          <Collapse.Panel>
            <h5>But I bet you want to</h5>
            <div style={{ width: 100, height: 100, background: 'aliceblue' }}></div>
          </Collapse.Panel>
        </Collapse.Item>
        <Collapse.Item>
          <Collapse.Summary>
            <p className="🍿🥪🎇🧶🧧">
              Everything will be alright<span>↓</span>
            </p>
          </Collapse.Summary>
          <Collapse.Panel>
            <h5>We just keep dancing</h5>
            <p>like we are 22</p>
          </Collapse.Panel>
        </Collapse.Item>
      </Collapse>
    </>
  );
};
export default BasicUsage;
