import React, { useEffect, useState } from 'react';
import styles from '../Styles/SalesHistory.module.css';

const SalesHistory = () => {
  const [sales, setSales] = useState([]);

  // Load sales from localStorage or fake DB
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('salesHistory')) || [];
    setSales(stored);
  }, []);

  return (
    <div className={styles['sales-history-container']}>
      <h2>📑 Sales History</h2>
      {sales.length === 0 ? (
        <p>No sales found.</p>
      ) : (
        <table className={styles['sales-table']}>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, i) => (
              <tr key={i}>
                <td>{sale.invoiceNo}</td>
                <td>{sale.customer || 'N/A'}</td>
                <td>{new Date(sale.date).toLocaleDateString()}</td>
                <td>Rs. {sale.total}</td>
                <td>Rs. {sale.grandTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalesHistory;

