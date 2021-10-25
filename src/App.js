import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {

  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItem(newItems)
  }

  return (
    <menu>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItem} />
    </menu>
  );
}



// const allCategories = ['all', ...new Set(items.map((item) => item.category))]

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories)

//   const filterItems = (category) => {
//     if (category === 'all') {
//       setMenuItems(items)
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category)
//     setMenuItems(newItems)
//   }
//   return (
//     <menu>
//       <div className="title">
//         <h2>our menu</h2>
//         <div className="underline"></div>
//       </div>
//       <Categories categories={categories} filterItems={filterItems} />
//       <Menu items={menuItems} />
//     </menu>
//   );
// }

export default App;
