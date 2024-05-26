

const Products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
  ];

let cart = document.getElementById("cart");

function addToCart(productId)  {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
    updateCart();    
}

function removeFromCart(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        quantityElement.innerText = quantity - 1;
    }
    updateCart();
}

function updateCart() {
    cart.innerHTML = "";
    let totalPrice = 0;
    Products.forEach(product => {
        const quantity = parseInt(document.getElementById(`quantity-${product.id}`).innerText);
        if (quantity > 0) {
          const itemTotal = quantity * product.price;
          totalPrice += itemTotal;
          const cartItem = document.createElement('div');
          cartItem.innerText = `${product.name} x ${quantity} - $${itemTotal}`;
          cartItem.style.backgroundColor= "lightgreen"
          cartItem.style.padding = "5px";
          cartItem.style.border = "1px solid black";
          cartItem.style.borderRadius = "5px";
          cartItem.style.marginBottom = "5px";
          cart.appendChild(cartItem);
        }
    });
    if (totalPrice === 0) {
        cart.innerText = 'No Product added to the cart';
      } else {
        const totalElement = document.createElement('div');
        totalElement.innerText = `Total Price: $${totalPrice}`;
        totalElement.style.backgroundColor= "rgb(187, 187, 187)";
        cart.appendChild(totalElement);
      }
}

updateCart();