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

  updateTotal();
};

const updateTotal = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
};

window.removeItem = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((i) => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

document.addEventListener("DOMContentLoaded", renderCart);
