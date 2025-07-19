import React, { useState, useEffect } from 'react';
import  styles from './Header.module.css';

const Header = ({ theme, onThemeToggle }) => {
  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    if (onThemeToggle) onThemeToggle(newTheme);
  };
  

 

  return (
    <header className={styles.header}>
      <div className={styles.brandname}>Hardware Management System</div>
      <button className={styles.togglebtn} onClick={handleClick}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
