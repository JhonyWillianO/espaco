function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>R$ ${item.price.toFixed(2)}</p>
            </div>
        `;
        total += item.price;
    });

    totalPriceContainer.textContent = total.toFixed(2);
}

function finalizePurchase() {
    // Aqui você pode implementar a lógica para gerar o QR Code e confirmar a compra
    alert('Compra finalizada! Código de confirmação: 12345');
    localStorage.removeItem('cart');
    window.location.href = 'produtos.html';
}

document.addEventListener('DOMContentLoaded', loadCart);
