import { getProducts } from "./products.mjs";

const container = document.getElementById("products_container");

// 1. Function: Products display karva mate
const displayProducts = (list) => {
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<h3 class="text-center w-100">No products found!</h3>`;
    return;
  }

  container.innerHTML = list
    .map(
      (p) => `
    <div class="col">
      <div class="card h-100 shadow-sm">
        <img src="${p.image}" class="card-img-top" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="text-primary fw-bold">$${p.price}</p>
          <button onclick="addToCart(${p.id})" class="btn btn-outline-primary w-100">Add To Cart</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
};

// 2. Function: Cart ma add karva mate (Window par rakhvu pade jethi HTML button kam kare)
window.addToCart = (id) => {
  const allProducts = getProducts();
  const product = allProducts.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart!");
};

// 3. Function: Filter ane Search mate
const filterData = () => {
  const search = document.getElementById("search-input").value.toLowerCase();
  const cat = document.getElementById("category-filter").value;
  const sort = document.getElementById("sort-filter").value;

  let result = getProducts();

  if (search)
    result = result.filter((p) => p.name.toLowerCase().includes(search));
  if (cat !== "all") result = result.filter((p) => p.category === cat);

  if (sort === "price-low") result.sort((a, b) => a.price - b.price);
  if (sort === "price-high") result.sort((a, b) => b.price - a.price);

  displayProducts(result);
};

// 4. Function: Cart count update karva mate
const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) cartCountEl.textContent = count;
};

// Page load thay tyre
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(getProducts());
  updateCartCount();
  document.getElementById("search-input").addEventListener("input", filterData);
  document
    .getElementById("category-filter")
    .addEventListener("change", filterData);
  document.getElementById("sort-filter").addEventListener("change", filterData);
});
