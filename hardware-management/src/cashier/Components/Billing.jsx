import React, { useState } from 'react';
import styles from '../Styles/Billing.module.css';

const dummyItems = [
  { name: 'Hammer', price: 500 },
  { name: 'Nails (1kg)', price: 200 },
  { name: 'Screwdriver', price: 300 },
  { name: 'Paint Bucket', price: 1200 }
];

const Billing = () => {
  const [customer, setCustomer] = useState('');
  const [paymentType, setPaymentType] = useState('Cash');
  const [item, setItem] = useState('');
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);

  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);
  const grandTotal = total - discount;
  const change = amountPaid - grandTotal;

  const handleAddItem = () => {
    const selectedItem = dummyItems.find(i => i.name === item);
    if (!selectedItem || qty <= 0) return;
    const existing = cart.find(i => i.name === item);
    if (existing) {
      existing.qty += qty;
      existing.subtotal = existing.qty * selectedItem.price;
      setCart([...cart]);
    } else {
      setCart([...cart, {
        name: item,
        price: selectedItem.price,
        qty,
        subtotal: selectedItem.price * qty
      }]);
    }
    setItem('');
    setQty(1);
  };

  const handleRemove = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleClear = () => {
    setCustomer('');
    setPaymentType('Cash');
    setItem('');
    setQty(1);
    setCart([]);
    setDiscount(0);
    setAmountPaid(0);
  };

  const handlePrint = () => {
    window.print();
    handleSaveAndClear();
  };

  const handleSaveAndClear = () => {
    const confirm = window.confirm('Are you sure you want to clear and start a new invoice?');
    if (!confirm) return;

    // Fake "Save" to database — you can replace this with your API call
    const invoiceData = {
      customer,
      paymentType,
      items: cart,
      total,
      discount,
      grandTotal,
      amountPaid,
      change,
      date: new Date().toISOString()
    };
    console.log('Saving invoice to database...', invoiceData);

    // After save, clear
    handleClear();
  };

  return (
    <div className={styles['billing-container']}>
      <h2>🧾 Create Invoice</h2>

      <div className={styles['top-form']}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
          <option>Cash</option>
          <option>Credit</option>
        </select>
      </div>

      <div className={styles['item-form']}>
        <select value={item} onChange={(e) => setItem(e.target.value)}>
          <option value="">Select Item</option>
          {dummyItems.map((it, i) => (
            <option key={i} value={it.name}>{it.name}</option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(parseInt(e.target.value))}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <table className={styles['invoice-table']}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((it, i) => (
            <tr key={i}>
              <td>{it.name}</td>
              <td>{it.qty}</td>
              <td>Rs. {it.price}</td>
              <td>Rs. {it.subtotal}</td>
              <td><button onClick={() => handleRemove(i)}>❌</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles['summary']}>
        <p>Total: Rs. {total}</p>
        <p>
          Discount: Rs.
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(parseInt(e.target.value) || 0)}
          />
        </p>
        <p>Grand Total: Rs. {grandTotal}</p>
        <p>
          Amount Paid: Rs.
          <input
            type="number"
            value={amountPaid}
            onChange={(e) => setAmountPaid(parseInt(e.target.value) || 0)}
          />
        </p>
        <p>Change: Rs. {change}</p>
      </div>

      <div className={styles['actions']}>
        <button className={styles['print-btn']} onClick={handlePrint}>Save & Print</button>
        <button onClick={handleSaveAndClear}>Clear Invoice</button>
      </div>
    </div>
  );
};

export default Billing;
