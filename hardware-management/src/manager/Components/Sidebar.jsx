import React from 'react';
import { Nav } from 'react-bootstrap';
import { BoxFill, PeopleFill, MegaphoneFill, Power } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles['sidebar-menu']}>
          <span className={styles['d-name']}><header>Manager</header></span>

          <Nav className={`flex-column ${styles['sidebar-nav']}`}>
            <Nav.Link as={Link} to="/manager/categories" className={styles['sidebar-link']}>Categories</Nav.Link><br/>
            <Nav.Link as={Link} to="/manager/items" className={styles['sidebar-link']}>Items</Nav.Link><br/>
            <Nav.Link as={Link} to="/manager/customers" className={styles['sidebar-link']}>Customers</Nav.Link><br/>
            <Nav.Link as={Link} to="/manager/alerts" className={styles['sidebar-link']}>Alerts</Nav.Link><br/>
          </Nav>
        </div>

        <div className={styles['sidebar-footer']}>
          <Nav.Link as={Link} to="/logout" className={styles['sidebar-logout']}>
            <Power className="me-2" />Logout
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
