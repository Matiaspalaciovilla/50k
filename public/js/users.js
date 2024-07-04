document.addEventListener('DOMContentLoaded', () => {
    const usuariosContainer = document.querySelector('#Usuarios');

    const renderUsuarios = () => {
        usuariosContainer.innerHTML = '';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const userData = JSON.parse(localStorage.getItem(key));

            if (userData && userData.email) {
                const userCard = document.createElement('div');
                userCard.className = 'card mb-3';
                userCard.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${userData.nombre} ${userData.apellido}</h5>
                        <p class="card-text">${userData.email}</p>
                        <button class="btn btn-danger" onclick="deleteUser('${key}')">Borrar</button>
                    </div>
                `;
                usuariosContainer.appendChild(userCard);
            }
        }
    };

    window.deleteUser = (key) => {
        localStorage.removeItem(key);
        renderUsuarios();
    };

    renderUsuarios();
});
