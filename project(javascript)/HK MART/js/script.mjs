console.log("HK Mart script loaded");

// Import the getProducts function from products.mjs to access product data
import { getProducts, products, getProductById } from "./products.mjs";

// User Session Check For Authentication
const isUserLoggedIn = () => {
  return sessionStorage.getItem("currentUser") !== null;
};

// Register user
const registerUser = () => {
  let username = document.getElementById("formGroupExample_Input").value;
  let password = document.getElementById("formGroupExample_Input2").value;

  if (!username || !password) {
    showToast("Error", "All fields are required.", "danger");
    return;
  }

  // Check if user already exists
  if (localStorage.getItem("user")) {
    showToast("Error", "User already registered.", "danger");
    return;
  }

  let newUser = { username, password };
  localStorage.setItem("user", JSON.stringify(newUser));
  showToast("Success", "Registration successful!", "success");
};

// Login user
const loginUser = () => {
  let username = document.getElementById("formGroupExampleInput").value;
  let password = document.getElementById("formGroupExampleInput2").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    showToast("Error", "User not registered.", "danger");
    return;
  }

  if (storedUser.username === username && storedUser.password === password) {
    sessionStorage.setItem("currentUser", JSON.stringify(storedUser));
    showToast("Success", "Login successful!", "success");
    location.reload();
  } else {
    showToast("Error", "Invalid credentials.", "danger");
  }
};

// Get current user
const getCurrentUser = () => {
  const userData = sessionStorage.getItem("currentUser");
  return userData ? JSON.parse(userData) : null;
};

// Logout user
const logoutUser = () => {
  sessionStorage.removeItem("currentUser");
  sessionStorage.removeItem("cart");
  window.location.href = "index.html";
};

// UI Update based on user login status
const updateUserUI = () => {
  const user = getCurrentUser();

  const usernameDisplay = document.getElementById("username-display");
  const logoutBtn = document.getElementById("logout-btn");
  const loginBtn = document.getElementById("login-btn");

  if (user) {
    if (usernameDisplay) usernameDisplay.textContent = user.username;
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (loginBtn) loginBtn.style.display = "none";
  } else {
    if (usernameDisplay) usernameDisplay.textContent = "Guest";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (loginBtn) loginBtn.style.display = "block";
  }
};

// Handle Logout
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
      logoutUser();
    }
  });
}

const displayProducts = (productToDisplay) => {
  console.log("displayProducts called", productToDisplay.length);
  const container = document.getElementById("products_container");

  if (!container) {
    console.error("products_container not found");
    return;
  }

  if (productToDisplay.length === 0) {
    container.innerHTML = `
     <div class="col-12">
        <div class="empty-state">
          <span><i class="bi bi-search"></i></span>
          <h3>No Products Found.</h3>
          <p>Try adjusting your search or filter</p>
        </div>
     </div>
    `;
    return;
  }

  container.innerHTML = productToDisplay
    .map(
      (p) =>
        `
    <div class="col py-4">
      <div class="card p-2" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="product image">
        <div class="card-body">
          <h5 class="card-title text-truncate">${p.name}</h5>
          <p class="card-text text-truncate">${p.description}</p>
          <p class="card-text">$${p.price.toFixed(2)}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <span class="stock-badge ${getStockClass(p.stock)}">${getStockText(p.stock)}</span>
          <button class="btn btn-add-to-cart rounded p-2" data-id="${p.id}" ${p.stock === 0 ? "disabled" : ""}>Add To Cart</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
};

// stock class helper (for badge styling)
const getStockClass = (stock) => {
  if (stock === 0) return "out-of-stock";
  if (stock < 10) return "low-stock";
  return "in-stock";
};

// stock text function
const getStockText = (stock) => {
  if (stock === 0) return "Out Of Stock";
  if (stock < 10) return `Only ${stock}`;
  return "In - Stock";
};

// Update cart count in navbar
const updateCartCount = () => {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) cartCountEl.textContent = count;
};

// get cart in session storage

export const getCart = () => {
  const cart = sessionStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

// save cart in session storage

export const saveCart = (cart) => {
  sessionStorage.setItem("cart", JSON.stringify(cart));
};

// addToCart Function
const addToCart = (productId) => {
  if (!isUserLoggedIn()) {
    showToast("Error", "Login Required", "warning");

    // Assuming there's a login modal with id "loginModal"
    const loginModal = new bootstrap.Modal(
      document.getElementById("loginModal"),
    );
    loginModal.show();
    return;
  }

  const product = getProductById(productId);

  if (!product) {
    showToast("Error", "Product not found", "danger");
    return;
  }

  if (product.stock === 0) {
    showToast(
      "Out of Stock",
      "This product is currently out of stock",
      "warning",
    );
    return;
  }

  let cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity >= product.stock) {
      showToast("Error", "Maximum quantity reached for this product", "danger");
      return;
    }
    existingItem.quantity++;
    showToast("Success", "Product quantity updated in cart", "success");
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      maxStock: product.stock,
    });
    showToast("Added to Cart", `${product.name} added to cart`, "success");
  }

  saveCart(cart);
  updateCartCount();
};

// filter

const filterProducts = () => {
  const searchTerm = DOM.searchInput?.value.toLowerCase() || "";
  const category = DOM.categoryFilter?.value || "all";
  const sortby = DOM.sortFilter?.value || "all";

  let products = state.products.slice();

  // search

  if (searchTerm) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm),
    );
  }

  // category

  if (category !== "all") {
    products = products.filter((p) => p.category === category);
  }

  // sort

  switch (sortby) {
    case "price-low":
      products.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      products.sort((a, b) => b.price - a.price);
      break;
    case "name":
      products.sort((a, b) => a.name.localeCompare(b.name));
  }

  displayProducts(products);
};

// show toast
export const showToast = (title, message, type = "info") => {
  // remove toast

  const existingToast = document.querySelector(".toast-notification");

  if (existingToast) {
    existingToast.remove();
  }

  const icon = {
    success: '<i class="fa-regular fa-thumbs-up"></i>',
    danger: '<i class="fa-solid fa-skull-crossbones"></i>',
    warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
    info: '<i class="fa-solid fa-circle-info"></i>',
  };

  const toast = document.createElement("div");

  toast.className = "toast-notification";
  toast.innerHTML = `
  <div class="d-flex align-items-center">
  <span>${icon[type]}</span>
      <div>
      <strong>${title}</strong>
      <div>${message}</div>
      </div>
      </div>
      `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOutRight 0.4s ease";

    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Cache the DOM elements once for faster performance
const DOM = {
  container: document.getElementById("products_container"),
  searchInput: document.getElementById("search-input"),
  categoryFilter: document.getElementById("category-filter"),
  sortFilter: document.getElementById("sort-filter"),
  loginBtn: document.getElementById("login_btn"),
  registerBtn: document.getElementById("register_btn"),
  logoutBtn: document.getElementById("logout-btn"),
  cartCount: document.getElementById("cart-count"),
  usernameDisplay: document.getElementById("username-display"),
};

// Cache the product list once
const state = {
  products: getProducts(),
};

document.addEventListener("DOMContentLoaded", function () {
  try {
    displayProducts(state.products);

    updateUserUI();
    updateCartCount();

    DOM.searchInput?.addEventListener("input", filterProducts);
    DOM.categoryFilter?.addEventListener("change", filterProducts);
    DOM.sortFilter?.addEventListener("change", filterProducts);

    DOM.loginBtn?.addEventListener("click", loginUser);
    DOM.registerBtn?.addEventListener("click", registerUser);
    DOM.logoutBtn?.addEventListener("click", () => logoutUser());

    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("btn-add-to-cart")) {
        const id = Number(e.target.getAttribute("data-id"));
        addToCart(id);
      }
    });
  } catch (err) {
    console.error("Initialization error", err);
    if (DOM.container) {
      DOM.container.innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger" role="alert">
            Something went wrong loading products: ${err.message}
          </div>
        </div>
      `;
    }
  }
  // Elements 
  const loginBtn = document.getElementById("btn-login-submit");
  const regBtn = document.getElementById("btn-reg-submit");
  const logoutBtn = document.getElementById("logout-btn");
  const loginModalBtn = document.getElementById("login-btn");
  const userDisplay = document.getElementById("username-display");

  // Register Logic 
  regBtn.addEventListener("click", function () {
    const u = document.getElementById("user-reg").value;
    const p = document.getElementById("pass-reg").value;

    if (u === "" || p === "") {
      alert("Please enter both username and password!");
    } else {
      // Save to localStorage
      localStorage.setItem("savedUser", u);
      localStorage.setItem("savedPass", p);
      alert("Account created! Now you can login.");
    }
  });

  // Login Logic 
  loginBtn.addEventListener("click", function () {
    const uIn = document.getElementById("user-in").value;
    const pIn = document.getElementById("pass-in").value;

    const sUser = localStorage.getItem("savedUser");
    const sPass = localStorage.getItem("savedPass");

    if (uIn === sUser && pIn === sPass) {
      alert("Login Success!");
      localStorage.setItem("isLogged", "yes");
      localStorage.setItem("activeUser", uIn);
      window.location.reload();
    } else {
      alert("Wrong username or password!");
    }
  });

  // Check Login State on Page Load 
  function checkUser() {
    const isLogged = localStorage.getItem("isLogged");
    const activeUser = localStorage.getItem("activeUser");

    if (isLogged === "yes") {
      userDisplay.innerText = activeUser;
      loginModalBtn.style.display = "none";
      logoutBtn.style.display = "block";
    }
  }
  checkUser();

  // Logout 
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("activeUser");
    window.location.reload();
  });
});
