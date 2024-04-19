import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Items from './Items';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;

  //or const default = JSON.parse(localStorage.get('list') || '[]')
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);

    toast.success('Item added');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);

    setLocalStorage(newItems);
    toast.success('Item removed');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default App;
