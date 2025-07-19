import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from  '../Styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>🧾 Cashier</h2>
      <nav className={styles.nav}>
        <NavLink to="/cashier" className={styles.link}>Dashboard</NavLink>
        <NavLink to="/cashier/billing" className={styles.link}>Billing / POS</NavLink>
        <NavLink to="/cashier/sales" className={styles.link}>Sales History</NavLink>
        <NavLink to="/cashier/customers" className={styles.link}>Customers</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
