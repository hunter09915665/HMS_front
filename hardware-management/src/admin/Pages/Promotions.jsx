import React from 'react';
import styles from './MainContent.module.css';
import { useState } from 'react';
import Promotions from './Promotions.module.css';

const promotions = [
  {
    id: 1,
    name: 'New Year Discount',
    discount: 15,
    startDate: '2025-06-20',
    endDate: '2025-06-25',
    status: 'Ongoing',
  },
  {
    id: 2,
    name: 'July Hardware Sale',
    discount: 20,
    startDate: '2025-07-01',
    endDate: '2025-07-05',
    status: 'Upcoming',
  },
  {
    id: 3,
    name: 'Summer Clearance',
    discount: 10,
    startDate: '2025-05-01',
    endDate: '2025-05-15',
    status: 'Expired',
  },
];


const MainContent = () => {

  const [filter, setFilter] = useState('All');

  const filteredPromotions = promotions.filter(promo =>
    filter === 'All' ? true : promo.status === filter
  );
  return (
    <div className={styles.mainContent}>
      <div className={styles['contentWrapper']}>
        <div className={Promotions['promo-container']}>
          <div className={Promotions['promo-header']}>
            <h2>Promotions Management</h2>
            <div className={Promotions['promo-actions']}>
              <button className={Promotions['btn-notify']}>📢 Send Notification</button>
              <button className={Promotions['btn-add']}>➕ Add Promotion</button>
            </div>
          </div>

          <div className={Promotions['promo-filters']}>
            <label>Filter by Status:</label>
            <select value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          <div className={styles['mainsection']}>
            <div className={Promotions['promo-table']}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Discount %</th>
                    <th>Valid From</th>
                    <th>Valid To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPromotions.map(p => (
                    <tr key={p.id}>
                      <td>{p.name}</td>
                      <td>{p.discount}%</td>
                      <td>{p.startDate}</td>
                      <td>{p.endDate}</td>
                      <td>
                        <span className={`${Promotions['status-badge']} ${Promotions[p.status.toLowerCase()]}`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={Promotions['promo-calendar']}>
              <h3>📆 Promotion Timeline</h3>
              <ul>
                {promotions.map(p => (
                  <li key={p.id}>
                    <span className={Promotions['calendar-date']}>
                      {p.startDate} → {p.endDate}
                    </span>{' '}
                    - <strong>{p.name}</strong> ({p.status})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
