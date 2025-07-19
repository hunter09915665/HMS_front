
import styles from './App.module.css';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import MainContent from './Components/MainContent.jsx';

import Dashboard from './Pages/Dashboard';
import Users from './Pages/User';
import ProfitLoss from './Pages/Profit';
import Promotions from './Pages/Promotions';
import InventoryControl from './Pages/Inventory';

import React from 'react';
import  { useState,useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';





function App() {
  const [collapsed, setCollapsed] = useState(false);

  //Load theme from localStorage (default to 'dark' if nothing saved)
const [theme, setTheme] = useState('light');

//Toggle theme and save to localStorage
  const handleThemeToggle = (newTheme) => {
    setTheme(newTheme);
  };
  // Optional: Add to <body> if needed
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    
    
    <div className={`${styles.dashboardLayout} ${theme=== 'dark'? styles.dark:styles.light}`} >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <div className={styles.rightPanel} style={{ marginLeft: collapsed ? '70px' : '220px' }}>
        <Header theme={theme} onThemeToggle={handleThemeToggle}/>

        <div className={styles.mainContent}> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="profit-loss" element={<ProfitLoss />} />
              <Route path="promotions" element={<Promotions />} />
              <Route path="inventory" element={<InventoryControl />} />
            </Routes>
          </div>

      </div>
    </div>
    
    
  );
}

export default App;
