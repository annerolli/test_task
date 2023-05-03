import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { headphones } from './data';
import { useState, useEffect } from 'react';

import { AppRouter } from './server';

const parseCart = JSON.parse(localStorage.getItem('cart')) || [];

function App() {
  const { products } = headphones;
  const [cartItems, setCartItems] = useState(parseCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = [...cartItems].find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, count: exist.count + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.count === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, count: exist.count - 1 } : x
        )
      );
    }
  };
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove));
  };
  return (
    <div className="App">
      <div className="App__container">
        <Header countCartItems={cartItems.length}></Header>
        <AppRouter
          products={products}
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove}
          Remove={removeFromCart}
        ></AppRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
