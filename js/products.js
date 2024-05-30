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

function generateProductHTML(product) {
    return `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
        </div>
    `;
}

function loadProducts() {
    const categories = Object.keys(products);
    categories.forEach(category => {
        const container = document.querySelector(`.product.${category}`);
        container.innerHTML = ''; // Clear the container first
        products[category].forEach(product => {
            container.innerHTML += generateProductHTML(product);
        });
    });
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

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');
}

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

document.addEventListener('DOMContentLoaded', loadProducts);



