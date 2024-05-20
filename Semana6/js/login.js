document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email: email,
        password: password
    };

    // Define las variables para la URL y el endpoint de autenticación
    let url = "https://paginas-web-cr.com/Api/apis/";
    let autenticar = "AutenticarUsuario.php";
    let fullUrl = url + autenticar;

    fetch(fullUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {// Guarda el token en sessionStorage
            sessionStorage.setItem('sessionToken', data.token);
            // Redirige a la página principal del sistema
            window.location.href = 'index.html';
        } else {// Muestra un mensaje de error
            document.getElementById('errorMessage').innerText = 'Datos incorrectos..';
        }
    })
    .catch(error => {// Manejo de errores de conexión
        document.getElementById('errorMessage').innerText = 'Error de conexión. Por favor, inténtelo más tarde.';
        console.error('Error:', error);
    });
});