import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import CartService from "../services/CartService";
import ProductService from "../services/ProductService";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductService.getProducts().find(
    (p) => p.id === parseInt(id)
  );

  const handleAddToCart = () => {
    if (product) {
      CartService.addToCart(product);
      toast.success("Product added to cart!");
      navigate("/cart");
    } else {
      toast.error("Product not found!");
    }
  };

  if (!product)
    return <p className="text-center text-red-500">Product not found!</p>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-xl text-gray-600 mb-2">{product.price}</p>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
