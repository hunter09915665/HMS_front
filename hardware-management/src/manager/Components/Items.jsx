// src/Components/Items.jsx
import React, { useState } from 'react';
import  styles from './Items.module.css';

function Items() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() !== '' && itemQty !== '' && itemCategory.trim() !== '') {
      const newItem = {
        name: itemName,
        quantity: Number(itemQty),
        category: itemCategory,
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemQty('');
      setItemCategory('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className={styles.itemsContainer}>
      <h2>Item Management</h2>

      <div className={styles.itemForm}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQty}
          onChange={(e) => setItemQty(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddItem} className={styles.addButton}>Add Item</button>
      </div>

      <table className={styles.itemTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((itm, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{itm.name}</td>
              <td>{itm.quantity}</td>
              <td>{itm.category}</td>
              <td>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Items;
