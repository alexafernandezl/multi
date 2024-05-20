let menu = `
<ul
    class="nav nav-tabs"
    id="navId"
    role="tablist"
>
<li class="nav-item">
    <a
        href="index.html"
        class="nav-link active"
        data-bs-toggle="tab"
        aria-current="page"
        >Dashboard</a
    >
</li>
<li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Usuarios</a
    >
    <div class="dropdown-menu">
        <a class="dropdown-item" href="usuarios.html">Listar</a>
        <a class="dropdown-item" href="usuarioscrear.html">Crear</a>
        <a class="dropdown-item" href="login.html">Inicio</a>

    </div>
</li>
`;

document.getElementById("menu").innerHTML = menu;

let piedepagina = `<h2>Pie de pagina</h2>`;

document.getElementById("piedepagina").innerHTML = piedepagina;