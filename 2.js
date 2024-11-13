const basePrice = 15;

function updatePrice() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = basePrice * quantity;
    document.getElementById("total-price").innerText = `Total Price: Rs. ${totalPrice}`;
}

function buyNow() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = basePrice * quantity;
    alert(`You added ${quantity} items to your cart for Rs. ${totalPrice}`);
}
