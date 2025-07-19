import React from 'react';
import styles from  './MainContent.module.css';
import Card from 'react-bootstrap/Card'; 
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid ,ResponsiveContainer, LabelList} from 'recharts';
import Dashboard from './Dashboard.module.css';


const reorderItems = [
  { id: 1, name: 'Cement Bag', quantity: 5 },
  { id: 2, name: 'PVC Pipe', quantity: 0 },
];
//sample data for revenue chart
// This data can be fetched from an API or database in a real application
const revenueData = [
  { name: 'Galle', revenue: 30000 },
  { name: 'Matara', revenue: 25000 },
  { name: 'Tangalle', revenue: 18000 },
  { name: 'Hambantota', revenue: 22000 },
];



const MainContent = () => {
  const [selectedBranch, setSelectedBranch] = useState('All');

  // Filtered data logic
  const filteredData = selectedBranch === 'All'
    ? revenueData
    : revenueData.filter(item => item.name === selectedBranch);
  return (
   <div className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <div className={Dashboard.dashboardcontainer}>
          <h2 className={Dashboard.dashboardtitle}>📊 Admin Dashboard Overview</h2>

          {/* 🔔 Reorder Alert */}
          {reorderItems.length > 0 && (
            <div className={Dashboard.alertbox}>
              <h4 className={Dashboard.alerttitle}>🔔 Reorder Alerts:</h4>
              <ul className={Dashboard.alertlist}>
                {reorderItems.map(item => (
                  <li key={item.id} className={Dashboard.alertlistitem}>
                    <span className={Dashboard.alertitem}>{item.name}</span> - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 🚀 Quick Links */}
          <div className={Dashboard.quicklinks}>
            <button className={Dashboard.btnlink + " " + Dashboard.manager} onClick={() => window.location.href = '/manager'}>
              👨‍💼 Manager Dashboard
            </button>
            <button className={Dashboard.btnlink + " " + Dashboard.cashier} onClick={() => window.location.href = '/cashier'}>
              💼 Cashier Dashboard
            </button>
          </div>

          {/* 📈 Summary Cards */}
          <div className={Dashboard.summarycards}>
            <div className={Dashboard.card + " " + Dashboard.green}>🧾 Total Sales Today<br /><strong>Rs. 55,000</strong></div>
            <div className={Dashboard.card + " " + Dashboard.blue}>📦 Total Items<br /><strong>420</strong></div>
            <div className={Dashboard.card + " " + Dashboard.yellow}>👥 Active Users<br /><strong>18</strong></div>
            <div className={Dashboard.card + " " + Dashboard.red}>🛒 Reorders Needed<br /><strong>{reorderItems.length}</strong></div>
          </div>
          {/* 📊 Revenue Chart */}

          <div className={styles.mainsection}>
            <div className={Dashboard.revenuechart}>
              <h3 className={Dashboard.charttitle}>🏪 Revenue by Branch</h3>

              {/* 🔽 Branch Filter Dropdown */}
              <div className={Dashboard.branchfilter} style={{ marginBottom: '10px' }}>
                <label htmlFor="branch-select">Filter by Branch : </label><br />
                <select
                  id="branch-select"
                  value={selectedBranch}
                  onChange={e => setSelectedBranch(e.target.value)}
                  className={Dashboard.branchselect}
                >
                  <option value="All">All</option>
                  {revenueData.map(branch => (
                    <option key={branch.name} value={branch.name}>{branch.name}</option>
                  ))}
                </select>
              </div>

              {/* 📊 Responsive Interactive BarChart */}
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={filteredData}
                  margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`Rs. ${value.toLocaleString()}`, 'Revenue']} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3b82f6">
                    <LabelList dataKey="revenue" position="top" formatter={(val) => `Rs.${val / 1000}k`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default MainContent;
