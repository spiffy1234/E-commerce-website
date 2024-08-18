import React, { useEffect, useState } from "react";
import CartService from "../services/CartService";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from CartService
    setCartItems(CartService.getCartItems());
  }, []);

  const handleRemove = (index) => {
    CartService.removeFromCart(index);
    setCartItems(CartService.getCartItems());
  };

  const handleCheckout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div className="flex-1 mr-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">{item.price}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
        <button
          onClick={handleCheckout}
          className="mt-6 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Checkout More Product
        </button>
      </div>
    </div>
  );
};

export default Cart;
