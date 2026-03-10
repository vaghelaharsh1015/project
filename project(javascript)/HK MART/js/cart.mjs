const renderCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tableBody = document.querySelector("tbody");
  const emptyDiv = document.getElementById("cart-empty");
  const tableDiv = document.getElementById("cart-item-container");

  if (cart.length === 0) {
    emptyDiv.style.display = "block";
    tableDiv.style.display = "none";
    return;
  }

  emptyDiv.style.display = "none";
  tableDiv.style.display = "block";

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

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity,0,);

    const tax = subtotal * 0.1;
    const shipping = 5.0;
    const grandTotal = subtotal + tax + shipping;

    subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    taxEl.innerText = `$${tax.toFixed(2)}`;
    totalEl.innerText = `$${grandTotal.toFixed(2)}`;
  };

  tableBody.innerHTML = cart
    .map(
      (item) => `
    <tr>
      <td><img src="${item.image}" width="50"></td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${(item.price * item.quantity).toFixed(2)}</td>
      <td><button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button></td>
    </tr>
  `,
    )
    .join("");
  updateCartSummary();
};

window.removeItem = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((i) => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

document.addEventListener("DOMContentLoaded", renderCart);
