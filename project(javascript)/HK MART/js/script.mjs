console.log("HK Mart script loaded");

// Import the getProducts function from products.mjs to access product data
import { getProducts, products, getProductById } from "./products.mjs";

// User Session Check For Authentication
const isUserLoggedIn = () => {
  return localStorage.getItem("isLogged") === "yes";
};

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
      <div class="card p-2 h-100 shadow-sm">
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
    showToast("Account Required", "Please create an account to buy products!", "warning");

    sessionStorage.setItem("pendingProduct", productId);

    // Assuming there's a login modal with id "loginModal"
    const loginModalElement = document.getElementById("loginModal");
    const loginModal = bootstrap.Modal.getInstance(loginModalElement) || new bootstrap.Modal(loginModalElement);
    loginModal.show();

    // Automatically switch to the Register tab for new users
    const regTabBtn = document.querySelector('#authTab button[data-bs-target="#regFormBox"]');
    if (regTabBtn) {
      const tab = new bootstrap.Tab(regTabBtn);
      tab.show();
    }

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
      "warning"
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
      p.name.toLowerCase().includes(searchTerm)
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
};

// Cache the product list once
const state = {
  products: getProducts(),
};

document.addEventListener("DOMContentLoaded", function () {
  try {
    displayProducts(state.products);
    updateCartCount();

    DOM.searchInput?.addEventListener("input", filterProducts);
    DOM.categoryFilter?.addEventListener("change", filterProducts);
    DOM.sortFilter?.addEventListener("change", filterProducts);

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
  if (regBtn) {
    regBtn.addEventListener("click", function () {
      const u = document.getElementById("user-reg").value;
      const p = document.getElementById("pass-reg").value;

      if (u === "" || p === "") {
        alert("Please enter both username and password!");
      } else {
        // Save to localStorage
        localStorage.setItem("savedUser", u);
        localStorage.setItem("savedPass", p);
        
        // Auto-login after registration
        localStorage.setItem("isLogged", "yes");
        localStorage.setItem("activeUser", u);
        
        // Let the user know and reload
        alert("Account created and logged in!");
        window.location.reload();
      }
    });
  }

  // Login Logic 
  if (loginBtn) {
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
  }

  // Check Login State on Page Load 
  function checkUser() {
    const isLogged = localStorage.getItem("isLogged");
    const activeUser = localStorage.getItem("activeUser");

    if (isLogged === "yes") {
      if (userDisplay) userDisplay.innerText = activeUser;
      if (loginModalBtn) loginModalBtn.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "block";

      const pendingProduct = sessionStorage.getItem("pendingProduct");
      if (pendingProduct) {
        sessionStorage.removeItem("pendingProduct");
        addToCart(Number(pendingProduct));
      }
    } else {
      if (userDisplay) userDisplay.innerText = "Guest";
      if (loginModalBtn) loginModalBtn.style.display = "block";
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  }
  
  checkUser();

  // Logout 
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("activeUser");
      window.location.reload();
    });
  }
});