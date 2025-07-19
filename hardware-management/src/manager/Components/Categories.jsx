// src/Components/Categories.jsx
import React, { useState } from 'react';
import styles from './Categories.module.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className={styles.categoryContainer}>
      <h2>Category Management</h2>

      <div className={styles.categoryForm}>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>

      <ul className={styles.categoryList}>
        {categories.map((cat, index) => (
          <li key={index}>
            {cat}
            <button className={styles.deleteBtn} onClick={() => handleDeleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
