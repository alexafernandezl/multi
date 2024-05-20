document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtiene los valores del formulario
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    // Verifica que ambos campos no estén vacíos
    if (!email || !password) {
        document.getElementById("error-message").innerText = "Por favor complete todos los campos.";
        document.getElementById("error-message").classList.remove("d-none");
        return;
    }

    // Define las variables para la URL y el endpoint de autenticación
    let url = "https://paginas-web-cr.com/Api/apis/";
    let autenticar = "AutenticarUsuario.php";
    let fullUrl = url + autenticar;
    
    // Datos para enviar
    var datoenviar = {
        email: email,
        password: password
    };

    // Realiza la solicitud de autenticación
    fetch(fullUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datoenviar)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud.");
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            sessionStorage.setItem("token", data.token);
            window.location.href = "index.html"; // Redirigir a la página principal
        } else {
            throw new Error(data.message || "Datos incorrectas.");
        }
    })
    .catch(error => {
        var errorMessageElement = document.getElementById("error-message");
        if (errorMessageElement) {
            errorMessageElement.innerText = error.message;
            errorMessageElement.classList.remove("d-none");
        } else {
            console.error("Error.");
        }
    });
});


//______________________________________________________________________________________

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    cargarDatos(email, password);
});



function mostrarError(mensaje) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerText = mensaje;
    errorMessage.classList.remove("d-none");
}

