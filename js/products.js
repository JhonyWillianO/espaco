const products = {
    alimentos: [
        { name: "Salgado-Frito/Assado", price: 6.00, image: "images/salgado.jpeg" },
        { name: "Salgado-BolinhaDeCarne", price: 7.00, image: "images/bolinha.jpeg" },
        { name: "Puruca Suina", price: 3.50, image: "images/pele.jpeg" }
    ],
    bebidas: [
        { name: "Refrigerante-Lata", price: 4.00, image: "images/lata.jpeg" },
        { name: "Refrigerante-Mini-Lata", price: 2.50, image: "images/mine lata.jpeg" },
        { name: "Refrigerante-GarrafaCoca-cola 1L", price: 5.00, image: "images/coca 1l.jpeg" },
        { name: "Refrigerante-GarrafinhaCoca-cola Ks", price: 3.00, image: "images/cocaks.webp" },
        { name: "Refrigerante-CocaCola", price: 10.00, image: "images/cola 2l.jpeg" },
        { name: "Refrigerante-Fantas/Sprite 2L", price: 9.00, image: "images/refri 2l.jpeg" },
        { name: "Àgua-Cristal Garrafa", price: 2.50, image: "images/agua.jpeg" },
        { name: "Pira Kids", price: 2.50, image: "images/toddynho.jpeg"},
        { name: "Refrigerante-VencetexGarrafa", price: 3.00, image: "images/venex g.jpeg"},
        { name: "Refrigerante-Vencetex 2L", price: 7.00, image: "images/venex.jpeg"},
        { name: "Monster Energy", price: 9.00, image: "images/energetico.jpeg"},
        { name: "Suco-Del Valle", price: 4.00, image: "images/suco.jpeg"}
    ],
    cervejas: [
        { name: "Garrafa-Brahma", price: 8.00, image: "images/BH.jpeg" },
        { name: "Garrafa-Litrão Antarctica", price: 8.00, image: "images/antatica.jpeg" },
        { name: "Litrinho-Skol", price: 3.50, image: "images/Skol l.jpeg" },
        { name: "Litrinho-Itaipava", price: 3.00, image: "images/itaipava l.jpeg" },
        { name: "Lata-BH/Skol", price: 4.50, image: "images/lata ceverja.jpeg"}
    ],
    doces: [
        { name: "Paçoca", price: 2.00, image: "images/rolhaaa.webp" },
        { name: "Prestígio", price: 3.00, image: "images/doce.jpeg" },
        { name: "BomBom Sonho de Valsa", price: 2.00, image: "images/bombom.jpg" }
    ]
};

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const allProducts = document.querySelectorAll('.product-item');
    allProducts.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

let cart = [];

function generateProductHTML(product, category) {
    return `
        <div class="product-item" data-category="${category}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, this)">Adicionar ao Carrinho</button>
            <span class="added-icon" style="display: none;">👍</span>
        </div>
    `;
}

function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-item');
    allProducts.forEach(product => {
        if (category === 'all' || product.parentElement.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function loadProducts() {
    const categories = Object.keys(products);
    categories.forEach(category => {
        const container = document.querySelector(`.product.${category}`);
        products[category].forEach(product => {
            container.innerHTML += generateProductHTML(product, category);
        });
    });
}

function addToCart(name, price, button) {
    cart.push({ name, price });
    updateCart();
    const icon = button.nextElementSibling;
    icon.style.display = 'inline';
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountContainer = document.getElementById('total-amount');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    totalAmountContainer.textContent = total.toFixed(2);
}

function finalizePurchase() {
    const purchaseCode = `ESP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    let purchaseDetails = '';
    let total = 0;

    cart.forEach(item => {
        purchaseDetails += `<li>${item.name} - R$ ${item.price.toFixed(2)}</li>`;
        total += item.price;
    });

    const newWindow = window.open("", "Compra Finalizada", "width=400,height=400,top=" + (window.innerHeight/2 - 200) + ",left=" + (window.innerWidth/2 - 200));
    newWindow.document.write(`
        <h2>Compra Finalizada</h2>
        <p>Código da compra: <strong>${purchaseCode}</strong></p>
        <ul>${purchaseDetails}</ul>
        <p>Total: R$ ${total.toFixed(2)}</p>
        <button onclick="window.print()">Imprimir</button>
    `);

    resetCart();
    resetProductsPage();
}

function resetCart() {
    cart = [];
    updateCart();
}

function resetProductsPage() {
    const icons = document.querySelectorAll('.added-icon');
    icons.forEach(icon => {
        icon.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);
