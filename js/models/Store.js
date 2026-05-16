class Store {
    static renderCatalog() {
        const productContainer = document.getElementById('product-container');
        if (!productContainer) return;

        const products = Storage.getProducts();
        productContainer.innerHTML = '';

        products.forEach(product => {
            const productCard = document.createElement('article');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <div class="product-card__image-wrapper">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}" 
                        class="product-card__image"
                    >
                </div>
                
                <div class="product-card__info">
                    <h3 class="product-card__name">${product.name}</h3>
                    <p class="product-card__category">${product.category}</p>
                    <p class="product-card__price">$${product.price.toLocaleString()}</p>
                    <p class="product-card__stock">Stock: ${product.stock}</p>
                </div>
                
                <div class="product-card__controls">
                    <input 
                        type="number" 
                        id="qty-${product.id}" 
                        value="1" 
                        min="1" 
                        max="${product.stock}" 
                        class="product-card__input"
                    >
                    <button 
                        class="product-card__button product-card__button--add" 
                        onclick="addToCart(${product.id})"
                    >
                        Agregar
                    </button>
                </div>
            `;

            productContainer.appendChild(productCard);
        });
    }
}