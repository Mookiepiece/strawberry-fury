import React from 'react';
import Collapse from '🦄/Collapse';

export default function BasicUsage() {
  return (
    <>
      <style>{`
      p.basic-collapse-summary {
        margin:0;
        border: 1px solid var(--color-primary);
        padding: 12px;
        cursor: pointer;
      }
      p.basic-collapse-summary:not(:first-child) {
        margin-top: -1px;
      }
      p.basic-collapse-summary.active {
        color: var(--color-primary);
      }
      p.basic-collapse-summary span {
        margin-left: 20px;
        display: inline-block;
        transition: all .3s;
      }
      p.basic-collapse-summary.active span{
        transform: rotate(.5turn);
      }
    `}</style>
      <Collapse>
        <Collapse.Item>
          <Collapse.Summary>
            <p className="basic-collapse-summary">
              You don't know about me<span>↓</span>
            </p>
          </Collapse.Summary>
          <Collapse.Panel>
            <h5>But I bet you want to</h5>
            <div style={{ width: 100, height: 100, background: 'aliceblue' }}></div>
          </Collapse.Panel>
        </Collapse.Item>
        <Collapse.Item>
          <Collapse.Summary>
            <p className="basic-collapse-summary">
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
}
