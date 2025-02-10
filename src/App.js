import React, { useState } from 'react';
import Filter from './components/Filter';
import ItemList from './components/ItemList';
import './App.css';
function App() {
  const [filter, setFilter] = useState("all");

  const items = [
    {id: 1, name: "Pomme", category: "fruit"},
    {id: 2, name: "Carote", category: "legume"},
    {id: 3, name: "Orange", category: "fruit"},
    {id: 1, name: "Lait", category: "boisson"},
  ]

  const handleFilterChange = (category) => {
    setFilter(category);
  }

  return (
    <div className="app">
      <h1>EasyFilter</h1>
      <Filter onFilterChange={handleFilterChange} />
      <ItemList items={items} filter={filter} />
    </div>
  );
}

export default App;
