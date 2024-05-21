//Propiedades
let tablausuarios = document.querySelector("#tablausuarios");
let mensajes = document.querySelector("#mensajes");

let url =  "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaCurso.php";
let insertar = "InsertarCursos.php";
let actualizar = "ActualizarCursos.php";

let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");

let nombrePaagina = document.title;
let listarPagina = "Listar Usuarios";
let crearPagina = "Crear";

let spinner = `
    <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
    </button>`;

if (nombrePaagina == crearPagina){
    formulario.addEventListener("submit",function(evento){
        evento.preventDefault();//evita la recarga de la pagina
      
        let datos = new FormData(formulario);

        let datosEnviar = {
            nombre: datos.get('nombre'),
            descripcion: datos.get('descripcion'),
            tiempo: datos.get('tiempo'),
            usuario: datos.get('usuario')
        };

        fetch ( url + insertar,{
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            }
        ) 
        .then( repuesta=> repuesta.json() )
        .then ( (datosrepuestas) => {
            insertarDatos(datosrepuestas)
          
        })
        .catch(console.log)
    })
}

if (nombrePaagina == listarPagina){

    formularioEditar.addEventListener("submit",
        function(evento){
            evento.preventDefault();//evita la recarga de la pagina

            let datos = new FormData(formularioEditar);
    
            let datosEnviar =
            {
                nombre: datos.get('nombre'),
                descripcion: datos.get('descripcion'),
                tiempo: datos.get('tiempo'), 
                usuario: datos.get('usuario'),               
                id: datos.get('id')
            };
    
            console.log(datosEnviar);
            fetch ( url + actualizar,
                {
                    method: 'POST',
                    body: JSON.stringify(datosEnviar)
                }
            ) 
            .then( repuesta=> repuesta.json() )
            .then ( (datosrepuestas) => {
                editarDatos(datosrepuestas)

            })
            .catch(console.log)
    
        })
}          
//Metodos
function cargar(){
    tablausuarios.innerHTML = "";
    cargarspinner();
    fetch ( url + listar ) //
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
            <tr class="table-primary"  >
                <td scope="row">${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.descripcion}</td>
                <td>${item.tiempo}</td>
                <td>${item.usuario}</td>
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

function insertarDatos(datosrepuestas){
    if ( datosrepuestas.code == 200){
        mensajes.innerHTML = `<div
        class="alert alert-success alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Ingreso exitoso</strong>
    </div>`;
    }
    else{
    mensajes.innerHTML = `<div
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Algo fallo</strong>
    </div>`;
    }
}

function editar(datos){
    let objeto  = JSON.parse(decodeURIComponent(datos));
    
    const modalEdicion = new bootstrap.Modal(document.getElementById("modalEdicion"));
    modalEdicion.show();

    document.getElementById("id").value = objeto.id;
    document.getElementById("nombre").value = objeto.nombre;
    document.getElementById("descripcion").value = objeto.descripcion;
    document.getElementById("tiempo").value = objeto.tiempo;
    document.getElementById("usuario").value = objeto.usuario;
    document.getElementById("idEditar").innerHTML = objeto.id;

}

function editarDatos(datosrepuestas){
    if ( datosrepuestas.code == 200){
        mensajes.innerHTML = `<div
        class="alert alert-success alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Modificacion exitosa</strong>
    </div>`;
    setTimeout(cargar, 3000);
    }
    else{
    mensajes.innerHTML = `<div
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Algo fallo</strong>
    </div>`;
    }
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

if (nombrePaagina == listarPagina){
    cargar();
}

