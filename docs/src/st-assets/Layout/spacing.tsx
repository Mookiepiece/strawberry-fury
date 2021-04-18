import React from 'react';
import { Button } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <style>{`
    .🎃🎊🧧🧵{
      width: 100px;
      height: 100px;
      background: var(--color-dark-fade-100);
      color:  var(--color-dark);
    }
    .🎃🎊🧧🧵 div {
      color: white;
      height: 50px;
      background: var(--color-dark-fade-200);
      border-radius: 3px;
      padding: 2px 5px;
    }

    `}</style>
      <div
        style={{
          display: 'grid',
          gap: 5,
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
        }}
      >
        <div className="🎃🎊🧧🧵">
          <div>default</div>
        </div>
        <div className="🎃🎊🧧🧵 pr-10">
          <div>pr-10</div>
        </div>
        <div className="🎃🎊🧧🧵 px-10">
          <div>px-10</div>
        </div>
        <div className="🎃🎊🧧🧵 pt-10">
          <div>pt-10</div>
        </div>
        <div className="🎃🎊🧧🧵 py-10">
          <div>py-10</div>
        </div>
        <div className="🎃🎊🧧🧵">
          <div className="mr-10"></div> mr-10
        </div>
        <div className="🎃🎊🧧🧵">
          <div className="mx-10"></div> mr-10
        </div>
        <div className="🎃🎊🧧🧵">
          <div className="mx-auto" style={{ width: 30 }}></div> mx-auto
        </div>
      </div>
    </>
  );
};
export default BasicUsage;
