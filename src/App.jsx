import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  return (
    <section className='section-center'>
      <Form addItem={addItem} />

      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default App;
