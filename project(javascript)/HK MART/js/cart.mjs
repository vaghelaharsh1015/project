const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

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

const removeItem = (id) => {
  let cart = getCart();
  if (confirm("Are you sure you want to remove this item from the cart?")) {
    cart = cart.filter((i) => i.id !== id);
  }
  saveCart(cart);
};

const renderCart = () => {
  const cart = getCart();
  const cartContainer = document.getElementById("cart-item-container");
  const emptyDiv = document.getElementById("cart-empty");
  const summaryDiv = document.getElementById("cart-summary");

  if (cart.length === 0) {
    emptyDiv.style.display = "block";
    cartContainer.style.display = "none";
    summaryDiv.style.display = "none";
    return;
  }

  emptyDiv.style.display = "none";
  cartContainer.style.display = "block";
  summaryDiv.style.display = "block";

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
    `
    )
    .join("");
  updateCartSummary();
};

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

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const tax = subtotal * 0.1;
    const shipping = 5.0;
    const grandTotal = subtotal + tax + shipping;

    subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    taxEl.innerText = `$${tax.toFixed(2)}`;
    totalEl.innerText = `$${grandTotal.toFixed(2)}`;
};

document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("quantity-increment-btn")) {
          const id = Number(e.target.getAttribute("data-id"));
          increaseQuantity(id)
        }
        if (e.target.classList.contains("quantity-decrement-btn")) {
            const id = Number(e.target.getAttribute("data-id"));
            decreaseQuantity(id)
        }
        if (e.target.classList.contains("remove-item-btn")) {
            const id = Number(e.target.getAttribute("data-id"));
            removeItem(id);
        }
    });
});
