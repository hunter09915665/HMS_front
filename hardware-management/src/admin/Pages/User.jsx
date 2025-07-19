import React from 'react';
import styles from './MainContent.module.css';
import { useState } from 'react';
import User from './User.module.css';


const userData = [
  { id: 1, name: 'Alice Perera', role: 'Admin', email: 'alice@hardware.lk', lastLogin: '2025-06-24', status: 'Active' },
  { id: 2, name: 'Kamal Silva', role: 'Manager', email: 'kamal@hardware.lk', lastLogin: '2025-06-22', status: 'Inactive' },
  { id: 3, name: 'Nadeesha Kumari', role: 'Cashier', email: 'nadeesha@hardware.lk', lastLogin: '2025-06-25', status: 'Active' },
];






const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRole, setFilteredRole] = useState('');

  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filteredRole === '' || user.role === filteredRole)
  );
  return (
    <div className={styles.mainContent}>
      <div className={User['user-container']}>
        <div className={User['user-header']}>
          <h2>User Management</h2>
          <br />
          <button className={User['add-user-btn']}>➕ Add New User</button>
        </div>
        <br />
        <div className={User['user-filters']}>
          <input
            type="text"
            placeholder="Search by name"
            className={User['user-search']}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            className={User['user-select']}
            value={filteredRole}
            onChange={e => setFilteredRole(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Cashier">Cashier</option>
          </select>
        </div>
        <div className={styles['mainsection']}>
          <div className={User['user-table-wrapper']}>
            <table className={User['user-table']}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Last Login</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <span
                        className={`${User['status-badge']} ${
                          user.status === 'Active'
                            ? User['active']
                            : User['inactive']
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className={User['action-buttons']}>
                      <button className={User['btn-edit']}>Edit</button>
                      <button className={User['btn-delete']}>Delete</button>
                      <button className={User['btn-reset']}>Reset</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
