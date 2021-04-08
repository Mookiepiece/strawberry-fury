import React from 'react';
import { Row } from 'starfall';

const BasicUsage: React.FC = () => {
  const styleSheet = [
    'color-primary',
    'color-secondary',
    'color-dark',
    'color-contrasting',
    'color-danger',
  ]
    .map(
      n =>
        ` .🎏🧥🩳🎲${n} {
          background: var(--${n});
        }
      ` +
        [...Array(7).keys()]
          .map(
            i => `
        .🎏🧥🩳🎲${n}${i * 100 + 100} {
          background: var(--${n}-fade-${i * 100 + 100});
        }`
          )
          .join(' ')
    )
    .join(' ');

  return (
    <>
      <style>
        {`${styleSheet}`}
        {`

      .🎏🧥🩳🎲 {
        font-size: 14px;
        height: 200px;
        flex-grow: 1;
        width: 200px;
        user-select: all;
        vertical-align: middle;
      }
      .🎏🧥🩳🎲 span {
        font-family: Consolas, sans-serif;
        font-size: 12px;
        filter:
          drop-shadow(1px 0px white)
          drop-shadow(0px 1px white)
          drop-shadow(1px 0px white)
          drop-shadow(0px 1px white)
          drop-shadow(-2px 0px white)
          drop-shadow(0px -2px white);
      }
      `}
      </style>
      <div>
        {[
          'color-primary',
          'color-secondary',
          'color-dark',
          'color-contrasting',
          'color-danger',
        ].map(n => (
          <Row key={n} wrap>
            <div className={`🎏🧥🩳🎲 🎏🧥🩳🎲${n}`}>
              <span>{`--${n}`}</span>
            </div>
            {[...Array(7).keys()]
              .map(i => (
                <div className={`🎏🧥🩳🎲 🎏🧥🩳🎲${n}${i * 100 + 100}`} key={i}>
                  <span>{`--${n}-fade-${i * 100 + 100}`}</span>
                </div>
              ))
              .reverse()}
          </Row>
        ))}
      </div>
    </>
  );
};
export default BasicUsage;
