//Propiedades
let tablausuarios = document.querySelector("#tablausuarios");
let mensajes = document.querySelector("#mensajes");

let url =  "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaEstudiantes.php";
let insertar = "InsertarCursos.php";
let actualizar = "ActualizarCursos.php";

let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");

let nombrePaagina = document.title;
let listarPagina = "Listar Usuarios";
let crearPagina = "Crear";

let spinner = `
            <button
            class="btn btn-primary"
            type="button"
            disabled
            >
            <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
            Loading...
            </button>`;






//Metodos
function cargar(){
    tablausuarios.innerHTML = "";
    cargarspinner();
    fetch ( url + listar ) //https://paginas-web-cr.com/Api/apis/ListaUsuarios.php
    .then( repuesta=> repuesta.json() )
    .then ( (datosrepuestas) => {
        //console.log(datosrepuestas)
        pintardatos(datosrepuestas)
    })
    .catch(console.log)
}

function pintardatos(objetodatos){
//    console.log(objetodatos);
    if ( objetodatos.code == 200){
        for (const item of objetodatos.data) {
            //console.log(item.id);
            tablausuarios.innerHTML += `
            <tr
            class="table-primary"
            >


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

                <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    onclick=editar('${encodeURIComponent(JSON.stringify(item))}')
                    role="button"
                    >Editar</a
                >
                <a
                    name=""
                    id=""
                    class="btn btn-danger"
                    onclick=eliminar('${item.id}')
                    role="button"
                    >Eliminar</a
                >
                </td>
            </tr>`;

        }
    }

    document.getElementById("seccionspinner").innerHTML = "";
}

function cargarspinner(){
    document.getElementById("seccionspinner").innerHTML = spinner;
}




if (nombrePaagina == listarPagina){
    cargar();
}

