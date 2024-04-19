import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
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

    toast.success('Item added');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success('Item removed');
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default App;
