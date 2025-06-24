let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1); // Eliminar el producto del carrito
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  total = 0;



  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.innerHTML = `${item.name} --> $${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})" class>Eliminar</button>`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}