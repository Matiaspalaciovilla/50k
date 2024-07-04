document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const loginMessage = document.querySelector('#loginMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.querySelector('#loginEmail').value;
        const password = document.querySelector('#loginPassword').value;

        let userFound = false;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const userData = JSON.parse(localStorage.getItem(key));

            if (userData.email === email && userData.password === password) {
                userFound = true;
                break;
            }
        }

        if (userFound) {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Account does not exist or incorrect password.';
            loginMessage.style.color = 'red';
        }
    });
});
