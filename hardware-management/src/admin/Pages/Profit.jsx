import React from 'react';
import styles from './MainContent.module.css';
import { useState } from 'react';
import profit from './Profit.module.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';

const dummyTransactions = [
  { id: 1, date: '2025-06-20', type: 'Income', description: 'Sales - Galle', amount: 8000, location: 'Galle' },
  { id: 2, date: '2025-06-20', type: 'Expense', description: 'Inventory Purchase - Galle', amount: 3000, location: 'Galle' },
  { id: 3, date: '2025-06-21', type: 'Income', description: 'Sales - Matara', amount: 7000, location: 'Matara' },
  { id: 4, date: '2025-06-21', type: 'Expense', description: 'Electricity - Matara', amount: 1500, location: 'Matara' },
];

const chartData = [
  { date: 'Jun 20', revenue: 8000, cost: 3000 },
  { date: 'Jun 21', revenue: 7000, cost: 1500 },
];

const branchProfits = [
  { location: 'Galle', profit: 5000 },
  { location: 'Matara', profit: 5500 },
];



const MainContent = () => {

  const [range, setRange] = useState('week');

  const totalRevenue = dummyTransactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalCost = dummyTransactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalRevenue - totalCost;

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <div className={profit.plcontainer}>
          <div className={profit.plheader}>
            <h2>Profit & Loss Overview</h2>
            <select value={range} onChange={e => setRange(e.target.value)} className={profit.plselect}>
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          <div className={profit.plsummary}>
            <div className={`${profit.card} ${profit.revenue}`}>Total Revenue: Rs. {totalRevenue}</div>
            <div className={`${profit.card} ${profit.cost}`}>Total Cost: Rs. {totalCost}</div>
            <div className={`${profit.card} ${profit.profit}`}>Net Profit: Rs. {netProfit}</div>
          </div>

          <div className={profit.plcharts}>
            <div>
              <h3>Daily Revenue vs Cost</h3>
              <LineChart width={400} height={250} data={chartData}>
                <Line type="monotone" dataKey="revenue" stroke="#16a34a" />
                <Line type="monotone" dataKey="cost" stroke="#dc2626" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </div>

            <div className={styles.mainsection}>
              <h3>Profit by Branch</h3>
              <BarChart width={400} height={250} data={branchProfits}>
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="profit" fill="#3b82f6" />
              </BarChart>
            </div>
            <div className={profit.pllog}>
              <h3>Transaction Log</h3>
              <table className={profit.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Amount (Rs)</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyTransactions.map(t => (
                    <tr key={t.id}>
                      <td>{t.date}</td>
                      <td className={t.type === 'Income' ? profit.income : profit.expense}>{t.type}</td>
                      <td>{t.description}</td>
                      <td>{t.amount}</td>
                      <td>{t.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={profit.plexport}>
              <button className={profit.btnExport}>📤 Export to Excel / PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
