import React from "react";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to E-commerce</h1>
      <h2 className="text-2xl font-bold mb-2">Fruits and Vegetables</h2>
      <ProductList />
    </div>
  );
};

export default HomePage;
