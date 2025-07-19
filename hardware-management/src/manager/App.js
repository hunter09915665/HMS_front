import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Categories from './Components/Categories';
import Items from './Components/Items';
import Customers from './Components/Customers';
import Alerts from './Components/Alerts';
import {  Route, Routes } from 'react-router-dom';
import styles from './App.module.css';


function App() {
  return (
    
    <div className={styles.App}>
      <Sidebar/>
        <Routes>
          <Route path="/Categories" element={<Categories/>} />
          <Route path="/Items" element={<Items/>} />
          <Route path="/Customers" element={<Customers/>} />
          <Route path="/Alerts" element={<Alerts/>} />
        </Routes>
    </div>
     
  );
}


export default App;
