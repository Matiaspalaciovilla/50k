const passwordInput = document.querySelector('#password');
const passwordStrength = document.querySelector('#password-strength');

function evaluatePasswordStrength(password) {
    const length = password.length;
    let strength = '';

    if (length < 6) {
        strength = 'Débil';
        passwordStrength.style = "color: red;"
    } else if (length < 10) {
        strength = 'Media';
        passwordStrength.style = "color: orange;"
    } else {
        strength = 'Fuerte';
        passwordStrength.style = "color: green;"
    }

    passwordStrength.textContent = `Fortaleza de la contraseña: ${strength}`;
}

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    evaluatePasswordStrength(password);
});
