// src/Components/Alerts.jsx
import React, { useState } from 'react';
import styles from './Alerts.module.css';

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');

  const handleAddAlert = () => {
    if (alertMsg.trim() !== '') {
      const newAlert = {
        message: alertMsg,
        date: new Date().toLocaleString(),
      };
      setAlerts([newAlert, ...alerts]);
      setAlertMsg('');
    }
  };

  const handleDeleteAlert = (index) => {
    const updatedAlerts = alerts.filter((_, i) => i !== index);
    setAlerts(updatedAlerts);
  };

  return (
    <div className={styles['alerts-container']}>
      <h2>Alert & Notification Management</h2>

      <div className={styles['alert-form']}>
        <input
          type="text"
          placeholder="Enter alert message"
          value={alertMsg}
          onChange={(e) => setAlertMsg(e.target.value)}
        />
        <button onClick={handleAddAlert}>Add Alert</button>
      </div>

      {alerts.length === 0 ? (
        <p className={styles['no-alerts']}>No alerts available.</p>
      ) : (
        <ul className={styles['alert-list']}>
          {alerts.map((alert, index) => (
            <li key={index} className={styles['alert-item']}>
              <div className={styles['alert-text']}>
                <strong>{alert.message}</strong>
                <span className={styles['alert-date']}>{alert.date}</span>
              </div>
              <button className={styles['delete-btn']} onClick={() => handleDeleteAlert(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;
