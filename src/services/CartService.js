const CartService = {
  addToCart: (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  getCartItems: () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  },

  removeFromCart: (index) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  },
};

export default CartService;
