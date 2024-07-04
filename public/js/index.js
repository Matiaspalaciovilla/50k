document.querySelector('#form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const userKey = `user_${Date.now()}`;

    const userData = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
    };

    localStorage.setItem(userKey, JSON.stringify(userData));

    alert('User registered correctly');
});
