const signupForm = document.querySelector('#form');
const signupMessage = document.querySelector('#signupMessage');
const loginMessage = document.querySelector('#loginMessage');

const toggleButton = document.querySelector('#toggleToSignup');
const toggleButton2 = document.querySelector('#toggleToLogin');

signupForm.addEventListener('submit', function (event) {
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
        password: password,
        timestamp: new Date().getTime()
    };
    if (!nombre || !apellido || !email || !password) {
        signupMessage.textContent = 'Please fill in all fields';
        signupMessage.style.color = 'red';
    }
        else{
        localStorage.setItem(userKey, JSON.stringify(userData));
        signupMessage.textContent = 'User registered sucessfully';
        signupMessage.style.color = 'green';
        }

});

toggleButton.addEventListener('click', function (event) {
    event.preventDefault();

    loginMessage.textContent = '';
}
)

toggleButton2.addEventListener('click', function (event) {
    event.preventDefault();

    signupMessage.textContent = '';
}
)