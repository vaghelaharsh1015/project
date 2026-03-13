// Function to get the cart from sessionStorage
// @returns {Array} Array of cart items

const getCart = () => {
  return JSON.parse(sessionStorage.getItem("cart")) || [];
};

//
//   Function to save the cart to sessionStorage and re-render the cart
//   @param {Array} cart - Array of cart items
//
const saveCart = (cart) => {
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

/**
 * Function to increase the quantity of a cart item
 * @param {number} id - Product ID
 */
const increaseQuantity = (id) => {
  let cart = getCart();
  cart = cart.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  saveCart(cart);
};

// that function is decrease qunttity
const decreaseQuantity = (id) => {
  let cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item && item.quantity === 1) {
    if (confirm("Are you sure you want to remove this item from the cart?")) {
      cart = cart.filter((i) => i.id !== id);
    }
  } else {
    cart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }
  saveCart(cart);
};

// thise function is remove item from cart
const removeItem = (id) => {
  let cart = getCart();
  if (confirm("Are you sure you want to remove this item from the cart?")) {
    cart = cart.filter((i) => i.id !== id);
  }
  saveCart(cart);
};

// thise Function to render the cart items and summary

const renderCart = () => {
  const cart = getCart();
  const cartContainer = document.getElementById("cart-item-container");
  const emptyDiv = document.getElementById("cart-empty");
  const summaryDiv = document.getElementById("cart-summary");

  // If cart is empty, show empty message and hide others
  if (cart.length === 0) {
    emptyDiv.style.display = "block";
    cartContainer.style.display = "none";
    summaryDiv.style.display = "none";
    return;
  }

  // Show cart items and summary
  emptyDiv.style.display = "none";
  cartContainer.style.display = "block";
  summaryDiv.style.display = "block";

  // thise code genret cart item
  cartContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="card mb-3 border-0 shadow-sm rounded-4">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img src="${item.image}" class="img-fluid rounded-3" style="width: 80px;" alt="${item.name}">
              <div class="ms-3">
                <h5 class="mb-0">${item.name}</h5>
              </div>
            </div>
            <div class="d-flex align-items-center">
                <button class="btn btn-primary rounded-circle btn-sm quantity-decrement-btn" data-id=${item.id}>-</button>
                <span class="px-3 fw-bold">${item.quantity}</span>
                <button class="btn btn-primary rounded-circle btn-sm quantity-increment-btn" data-id=${item.id}>+</button>
            </div>
            <div class="text-end">
                <p class="mb-0 fw-bold">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div>
              <button class="btn btn-danger btn-sm remove-item-btn" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
  // Update the cart summary
  updateCartSummary();
};

// thise Function to update the cart summary with subtotal, tax, and total

const updateCartSummary = () => {
  const cart = getCart();
  const summarySection = document.getElementById("cart-summary");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");

  if (!summarySection) return;

  if (cart.length === 0) {
    summarySection.style.display = "none";
    return;
  }

  summarySection.style.display = "block";

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Calculate tax (10%) and shipping
  const tax = subtotal * 0.1;
  const shipping = 5.0;
  const grandTotal = subtotal + tax + shipping;

  // Update the DOM elements
  subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  taxEl.innerText = `$${tax.toFixed(2)}`;
  totalEl.innerText = `$${grandTotal.toFixed(2)}`;
};

//thise code to  Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Render cart on page load
  renderCart();

  // Event delegation for cart buttons
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("quantity-increment-btn")) {
      const id = Number(e.target.getAttribute("data-id"));
      increaseQuantity(id);
    }
    if (e.target.classList.contains("quantity-decrement-btn")) {
      const id = Number(e.target.getAttribute("data-id"));
      decreaseQuantity(id);
    }
    if (e.target.classList.contains("remove-item-btn")) {
      const id = Number(e.target.getAttribute("data-id"));
      removeItem(id);
    }
  });
});
