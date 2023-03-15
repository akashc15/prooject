// Select all add to cart buttons
const addToCartButtons = document.querySelectorAll('.product-card button');

// Add event listener for each add to cart button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get product details
    const productCard = button.parentNode;
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p:last-of-type').textContent;

    // Create new cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <h3>${productName}</h3>
      <p>${productPrice}</p>
      <button class="remove-item">Remove</button>
    `;

    // Add cart item to cart
    const cart = document.querySelector('.cart');
    cart.appendChild(cartItem);

    // Update cart total
    updateCartTotal();
  });
});

// Update cart total
function updateCartTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach(item => {
    const itemPrice = parseFloat(item.querySelector('p').textContent.replace('$', ''));
    total += itemPrice;
  });
  const cartTotal = document.querySelector('.cart-total');
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Select all remove item buttons
const removeItemButtons = document.querySelectorAll('.remove-item');

// Add event listener for each remove item button
removeItemButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cartItem = button.parentNode;
    cartItem.remove();
    updateCartTotal();
  });
});
