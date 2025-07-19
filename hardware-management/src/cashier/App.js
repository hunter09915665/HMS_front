import React, { useState, createContext } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import CashierDashboard from './Components/CashierDashboard';
import Billing from './Components/Billing';
import SalesHistory from './Components/SalesHistory';
import Customers from './Components/Customer';
import ThemeToggle from './Components/ThemeToggle';
import styles from './App.module.css';
import Theme from './Styles/Theme.module.css';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${styles.app} ${Theme[theme]}`}>
        <Sidebar />
        <div className={styles['main-content']}>
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<CashierDashboard />} />
            <Route path="billing" element={<Billing />} />
            <Route path="sales" element={<SalesHistory />} />
            <Route path="customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
