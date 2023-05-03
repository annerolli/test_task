import './Home.css';
import React from "react";
import { Card } from '../Card/Card';

export const Home = (props) => {
  const { products, onAdd } = props;

  const headphones = products.filter(function(cat) {
    return cat.category === "headphones";
  });
  const wireless_headphones = products.filter(function(cat) {
    return cat.category === "wireless_headphones";
  });
  return (
    <main className="catalog">
      <p className="catalog__headphones title">Наушники</p>
      <div className="catalog__list">
        {headphones.map((product) => (
          <Card key={product.id} product={product} onAdd={onAdd}></Card>
        ))}
      </div>
      <p className="catalog__headphones title">Беспроводные наушники</p>
      <div className="catalog__list">
        {wireless_headphones.map((product) => (
          <Card key={product.id} product={product} onAdd={onAdd}></Card>
        ))}
      </div>
    </main>
  );
}