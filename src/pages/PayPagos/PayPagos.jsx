import React from 'react';
import './PayPagos.css';

import NavBar from '../../components/NavBar';
import Payments from '../../components/Payments/Payments';

function PayPagos() {
  return (
    <div className="pagePagos">
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <div>
        <div>
          <Payments />
        </div>
      </div>
    </div>
  );
}

export default PayPagos;
