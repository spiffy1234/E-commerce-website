import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService"; // Import AuthService

const products = [
  { id: 1, name: "Apple", price: "₹80", description: "Fresh apple" },
  { id: 2, name: "Banana", price: "₹40", description: "Ripe banana" },
  { id: 3, name: "Carrot", price: "₹60", description: "Organic carrots" },
  { id: 4, name: "Tomato", price: "₹70", description: "Juicy tomatoes" },
  { id: 5, name: "Orange", price: "₹100", description: "Citrus orange" },
  { id: 6, name: "Spinach", price: "₹50", description: "Fresh spinach leaves" },
  { id: 7, name: "Grapes", price: "₹150", description: "Seedless grapes" },
  { id: 8, name: "Potato", price: "₹30", description: "Organic potatoes" },
  { id: 9, name: "Cucumber", price: "₹45", description: "Crisp cucumbers" },
  {
    id: 10,
    name: "Strawberry",
    price: "₹250",
    description: "Sweet strawberries",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleLogout = () => {
    AuthService.logout();
    navigate("/logout");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6 relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Product List</h1>
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-lg text-gray-600 mb-2">{product.price}</p>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <button
                onClick={() => handleProductClick(product.id)}
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
