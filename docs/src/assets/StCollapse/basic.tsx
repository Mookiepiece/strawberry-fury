import React from 'react';
import { StCollapse } from '🦄';

const BasicUsage: React.FC = () => {
  return (
    <>
      <style>{`
      p.basic-collapse-summary {
        margin:0;
        border: 1px solid var(--color-primary);
        padding: 12px;
        cursor: pointer;
        user-select: none;
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
      <StCollapse>
        <StCollapse.Item>
          <StCollapse.Summary>
            <p className="basic-collapse-summary">
              You dont know about me<span>↓</span>
            </p>
          </StCollapse.Summary>
          <StCollapse.Panel>
            <h5>But I bet you want to</h5>
            <div style={{ width: 100, height: 100, background: 'aliceblue' }}></div>
          </StCollapse.Panel>
        </StCollapse.Item>
        <StCollapse.Item>
          <StCollapse.Summary>
            <p className="basic-collapse-summary">
              Everything will be alright<span>↓</span>
            </p>
          </StCollapse.Summary>
          <StCollapse.Panel>
            <h5>We just keep dancing</h5>
            <p>like we are 22</p>
          </StCollapse.Panel>
        </StCollapse.Item>
      </StCollapse>
    </>
  );
};
export default BasicUsage;
