const ProductService = {
  getProducts: () => {
    // Fetch products from an API or hardcoded data
    return [
      { id: 1, name: "Apple", price: "₹80", description: "Fresh apple" },
      { id: 2, name: "Banana", price: "₹40", description: "Ripe banana" },
      { id: 3, name: "Carrot", price: "₹60", description: "Organic carrots" },
      { id: 4, name: "Tomato", price: "₹70", description: "Juicy tomatoes" },
      { id: 5, name: "Orange", price: "₹100", description: "Citrus orange" },
      {
        id: 6,
        name: "Spinach",
        price: "₹50",
        description: "Fresh spinach leaves",
      },
      { id: 7, name: "Grapes", price: "₹150", description: "Seedless grapes" },
      { id: 8, name: "Potato", price: "₹30", description: "Organic potatoes" },
      { id: 9, name: "Cucumber", price: "₹45", description: "Crisp cucumbers" },
      {
        id: 10,
        name: "Strawberry",
        price: "₹250",
        description: "Sweet strawberries",
      }, // Add more products as needed
    ];
  },
};

export default ProductService;
