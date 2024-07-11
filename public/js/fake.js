const username = document.querySelector('.username');

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
                    <button>Buy</button>
                `;

                productosContainer.appendChild(productoDiv);
            });
            getLastItem();
        })
        .catch(error => console.error('Error:', error)); 
});

function getLastItem() {
    let lastItem = null;
    let lastTimestamp = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));

        if (item.timestamp && item.timestamp > lastTimestamp) {
            lastTimestamp = item.timestamp;
            lastItem = {
                nombre: item.nombre,
                key: key,
                value: item.value,
                timestamp: item.timestamp
            };
        }
    }

    username.innerHTML = lastItem.nombre;
    
    if (lastItem.nombre === undefined) {
        username.innerHTML = "Login";
    } else {
        username.innerHTML = lastItem.nombre;
    }
}
function reload() {
    if (key !== 'lastItem' && storage[key] === lastItemValue) {
        delete storage[key];
    }
}