document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(productos => {
            productos.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');

                productoDiv.innerHTML = `
                    <img src="${producto.image}" alt="${producto.title}">
                    <h2>${producto.title}</h2>
                    <p>${producto.price} USD</p>
                    <button>Comprar</button>
                `;

                productosContainer.appendChild(productoDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});