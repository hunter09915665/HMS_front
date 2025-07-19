import React from 'react';
import styles from './MainContent.module.css'


const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <h2>Dashboard</h2>

        <div className={styles.cardGrid}>
          <div className={styles.card}>Total Users: 120</div>
          <div className={styles.card}>Orders Today: 34</div>
          <div className={styles.card}>Revenue: $5,230</div>
        </div>

        <div className={styles.mainsection}>
          <h3>Recent Activity</h3>
          {/* You can insert a chart or table here */}
          <div className={styles.activityox}>[Table/Chart Placeholder]</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
