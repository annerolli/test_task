import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Basket } from './components/Basket/Basket';
import { Home } from './components/Home/Home';

export const AppRouter = ({ products, onAdd, cartItems, onRemove, Remove }) => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<Home products={products} onAdd={onAdd} />}
        exact={true}
      ></Route>
      <Route
        path={'/cart'}
        element={
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            Remove={Remove}
          />
        }
        exact={true}
      ></Route>
      <Route
        path={'/like'}
        element={<div style={{ minHeight: '69.2vh' }}>Избранное</div>}
      ></Route>
    </Routes>
  );
};
