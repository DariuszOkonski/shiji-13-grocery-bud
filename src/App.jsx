import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {};

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default App;
