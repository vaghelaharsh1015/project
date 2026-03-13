// Array of product objects with details for the e-commerce store
export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 79.99,
    image:
      "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/headphones/ontrac/pdp/cnc-copper/gallery/571H-PDP-Gallery-7.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1040",
    description: "Premium wireless headphones with noise cancellation",
    stock: 15,
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced smartwatch with fitness tracking",
    stock: 8,
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    category: "Accessories",
    price: 59.99,
    image:
      "https://nestasia.in/cdn/shop/files/Laptopbag_3.png?v=1696593176&width=800",
    description: "Professional leather bag for 15-inch laptops",
    stock: 20,
  },
  {
    id: 4,
    name: "Cotton T-Shirt (Pack of 3)",
    category: "Clothing",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/81vq6XFKNXL._AC_UY1100_.jpg",
    description: "Comfortable cotton t-shirts in assorted colors",
    stock: 50,
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Clothing",
    price: 89.99,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09522.jpg?auto=webp&quality=75&width=1024",
    description: "Lightweight running shoes with cushioned sole",
    stock: 12,
  },
  {
    id: 6,
    name: "JavaScript Programming Book",
    category: "Books",
    price: 39.99,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/351590690/RF/QV/LJ/150254197/javascript-programming-for-beginner-s-to-advance-2023-guide.png",
    description: "Complete guide to modern JavaScript",
    stock: 30,
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    description: "Insulated water bottle keeps drinks cold for 24 hours",
    stock: 0,
  },
  {
    id: 8,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 34.99,
    image:
      "https://www.nmpc.in/cdn/shop/files/nmpc-india-mchose-official-mouse-g7-white-mchose-g7-lightweight-ergonomic-wireless-mouse-1166640163.jpg?v=1755353987",
    description: "Ergonomic wireless mouse with precision tracking",
    stock: 25,
  },
  {
    id: 9,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    image:
      "https://cb.scene7.com/is/image/Crate/cb_dSEO_20230829_CoffeeMakers_SingleServe?wid=720&qlt=70&op_sharpen=1",
    description: "Programmable coffee maker with thermal carafe",
    stock: 10,
  },
  {
    id: 10,
    name: "Yoga Mat",
    category: "Sports",
    price: 29.99,
    image:
      "https://res.cloudinary.com/truecarecdn/image/upload/v1657540836/Yoga-Mat-PNG-Transparent-removebg-preview.png",
    description: "Non-slip yoga mat with carrying strap",
    stock: 18,
  },
  {
    id: 11,
    name: "Desk Lamp LED",
    category: "Home",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description: "Adjustable LED desk lamp with USB charging port",
    stock: 15,
  },
  {
    id: 12,
    name: "Backpack",
    category: "Accessories",
    price: 49.99,
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2025/8/536522510/ST/CV/JL/30532852/product-jpeg.jpg",
    description: "Water-resistant backpack with laptop compartment",
    stock: 22,
  },
];

// Helper to get all products
export const getProducts = () => {
  return products;
};

// Helper to find a product by ID
export const getProductById = (id) => {
  return products.find((p) => p.id === id);
};
