// ADD TO CART
console.log("JS CONNECTED");

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: Number(price)   // 👈 IMPORTANT
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// LOAD CART PAGE
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let items = document.getElementById("cartItems");
  let total = 0;

  items.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    items.appendChild(li);

    total += Number(item.price); // 👈 IMPORTANT
  });

  document.getElementById("total").textContent = total;
}

// RUN ONLY ON CART PAGE
if (document.getElementById("cartItems")) {
  loadCart();
}
