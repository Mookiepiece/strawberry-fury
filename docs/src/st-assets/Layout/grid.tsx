import React from 'react';
import { Col, Row } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <style>{`
    .🎃🎊🧧{
      height: 110px;
      background: var(--color-contrasting-fade-400);
      color: white;
    }
    .🎃🎊🧧 div {
      margin: 2px;
      width: 50px;
      min-height: 50px;
      background: var(--color-contrasting-fade-500);
    }

    `}</style>
      <div
        style={{
          display: 'grid',
          gap: '2px',
        }}
      >
        <div className="🎃🎊🧧 row">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="🎃🎊🧧 row justify-between align-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="🎃🎊🧧 row justify-around align-end">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="🎃🎊🧧 row justify-end  align-stretch">
          <div className="mr-auto">1</div>
          <div>2</div>
        </div>
        <Row className="🎃🎊🧧" justify="evenly" align="center">
          <Col grow={1}>1</Col>
          <Col basis={100}>2</Col>
          <Col>3</Col>
        </Row>
        <Row className="🎃🎊🧧" justify="center" align="center">
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
        <Col className="🎃🎊🧧" content="center" align="center" wrap>
          <Row grow={1}>1</Row>
          <Row>2</Row>
          <Row grow={1}>3</Row>
        </Col>
      </div>
    </>
  );
};
export default BasicUsage;
