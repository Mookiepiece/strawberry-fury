import React from 'react';
import ReactDOM from 'react-dom';

let starfallModalContainer: HTMLDivElement | null = null;

const Portal: React.FC = ({ children }) => {
  if (typeof document !== 'object') return null;
  if (!starfallModalContainer) {
    starfallModalContainer = document.createElement('div');
    document.body.appendChild(starfallModalContainer);
  }
  return ReactDOM.createPortal(children, starfallModalContainer);
};

export default Portal;
