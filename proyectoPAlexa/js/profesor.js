// Propiedades
let tablausuarios = document.querySelector("#tablausuarios");
let mensajes = document.querySelector("#mensajes");

let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaProfesores.php";
let insertar = "InsertarProfesores.php";
let actualizar = "ActualizarCursos.php";

let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");

let nombrePagina = document.title;
let listarPagina = "Listar Usuarios";
let crearPagina = "Crear";

let spinner = `
    <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
    </button>`;

if (nombrePagina === crearPagina) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Evita la recarga de la página

        let datos = new FormData(formulario);

        let datosEnviar = {
            cedula: datos.get('cedula'),
            correoelectronico: datos.get('correoelectronico'),
            telefono: datos.get('telefono'),
            telefonocelular: datos.get('telefonocelular'),
            fechanacimiento: datos.get('fechanacimiento'),
            sexo: datos.get('sexo'),
            direccion: datos.get('direccion'),
            nombre: datos.get('nombre'),
            apellidopaterno: datos.get('apellidopaterno'),
            apellidomaterno: datos.get('apellidomaterno'),
            
            idCarreras: datos.get('idCarreras'),
            usuario: datos.get('usuario'),
            nacionalidad: datos.get('nacionalidad'),
        };

        fetch(url + insertar, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosEnviar)
        })
        .then(respuesta => respuesta.json())
        .then(datosRespuesta => {
            insertarDatos(datosRespuesta);
        })
        .catch(error => {
            console.error(error);
            mostrarMensajeError();
        });
    });
}

function cargar() {
    tablausuarios.innerHTML = "";
    cargarspinner();
    fetch(url + listar)
        .then(respuesta => respuesta.json())
        .then(datosRespuesta => {
            pintardatos(datosRespuesta);
        })
        .catch(console.log);
}

function pintardatos(objetodatos) {
    if (objetodatos.code === 200) {
        for (const item of objetodatos.data) {
            tablausuarios.innerHTML += `
            <tr class="table-primary">
                <td scope="row">${item.id}</td>
                <td>${item.cedula}</td>
                <td>${item.correoelectronico}</td>
                <td>${item.telefono}</td>
                <td>${item.telefonocelular}</td>
                <td>${item.fechanacimiento}</td>
                <td>${item.sexo}</td>
                <td>${item.direccion}</td>
                <td>${item.nombre}</td>
                <td>${item.apellidopaterno}</td>
                <td>${item.apellidomaterno}</td>
               
                <td>${item.idCarreras}</td>
                <td>${item.usuario}</td>
                <td>${item.nacionalidad}</td>
                <td>
                    <a name="" id="" class="btn btn-primary" onclick=editar('${encodeURIComponent(JSON.stringify(item))}') role="button">Editar</a>
                    <a name="" id="" class="btn btn-danger" onclick=eliminar('${item.id}') role="button">Eliminar</a>
                </td>
            </tr>`;
        }
    }
    document.getElementById("seccionspinner").innerHTML = "";
}

function cargarspinner() {
    document.getElementById("seccionspinner").innerHTML = spinner;
}

function insertarDatos(datosRespuesta) {
    if (datosRespuesta.code === 200) {
        mensajes.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <strong>Ingreso exitoso</strong>
        </div>`;
    } else {
        mostrarMensajeError();
    }
}

function mostrarMensajeError() {
    mensajes.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <strong>Algo falló</strong>
    </div>`;
}

if (nombrePagina === listarPagina) {
    cargar();
}
