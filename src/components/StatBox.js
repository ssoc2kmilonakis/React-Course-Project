import React from 'react';
import { Col } from 'reactstrap';

const StatBox = ({ title, amount }) => {
  return (
    <Col xs="6" sm="6" md="3" className="mb-4">
      <div className="d-flex flex-column align-items-center bg-white rounded shadow p-3">
        <p className="mb-0 font-weight-bold text-center">{title}</p>
        <div
          className="bg-info rounded-circle d-flex justify-content-center align-items-center my-2"
          style={{ height: '50px', width: '50px' }}
        >
          <p className="mb-0 text-white">{amount}</p>
        </div>
      </div>
    </Col>
  );
};

export default StatBox;
