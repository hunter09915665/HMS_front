import React,{useState} from 'react';
import {  NavLink } from 'react-router-dom';

import { HouseFill, BoxFill, PeopleFill, Receipt, GraphUp, Power, Speedometer2, MegaphoneFill, GraphUpArrow } from 'react-bootstrap-icons';
import styles from './Sidebar.module.css';


const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    
        
      <div className={`${styles.sidebar} ${collapsed ? 'styles.collapsed' : ''}`}>
        <div className={styles.sidebarHeader}> 
           <h1 className={styles.dName}>{collapsed ? 'A' : 'Admin'} </h1>
         <button className={styles.toggleBtn} onClick={() => setCollapsed(!collapsed)}>☰</button>    
       </div>
        <div className={styles.sidebarMenu}>
         
          <NavLink to="/admin" className={styles.sidebarLink} title={collapsed ? "Dashboard" : ""}><Speedometer2 className="me-2" /> {!collapsed && "Dashboard"}</NavLink>
          <NavLink to="/admin/Users" className={styles.sidebarLink} title={collapsed ? "Users" : ""}><PeopleFill className="me-2" />{!collapsed &&  <span className="link-text">Users</span>}</NavLink>
          <NavLink to="/admin/profit-loss" className={styles.sidebarLink} title={collapsed ? "Profit-Loss" : ""}><GraphUpArrow className="me-2" />{!collapsed && "Profit & Loss"}</NavLink>
          <NavLink to="/admin/Promotions" className={styles.sidebarLink} title={collapsed ? "Promotions" : ""}><MegaphoneFill className="me-2" />{!collapsed && "Promotions"}</NavLink>
          <NavLink to="/admin/Inventory" className={styles.sidebarLink} title={collapsed ? "Inventory" : ""}><Receipt className="me-2" />{!collapsed && "Inventory Control"}</NavLink>

          
         
        </div>

      
        <div className={styles.sidebarFooter}>
           <NavLink to="/logout" className={styles.sidebarLogout}><Power className='me-2 '/>{!collapsed && "Logout"}</NavLink>

        </div>
      </div>
   
  )
}

export default Sidebar