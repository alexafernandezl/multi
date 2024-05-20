let menu = `
<header>
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
            <a class="navbar-brand">Clases para mantener tu closet ordenado</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html"><i class="fas fa-home"></i>Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link  dropdown-toggle" 
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        href="SobreNosostros.html"><i class="fas fa-info-circle"></i> Sobre Nosotros</a>

                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="estudiante.html">Estudiante</a>
                        <a class="dropdown-item" href="profesor.html">Profesor</a>
                        <a class="dropdown-item" href="grupo.html">Grupo</a>
                        <a class="dropdown-item" href="curso.html">Curso</a>

                    </div>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="Contacto.html"><i class="fas fa-envelope"></i> Contacto</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</header>`;

document.getElementById("menu").innerHTML = menu;

let piedepagina = `
<footer class=" text-white text-center py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>Síguenos en nuestras redes sociales:</p>
            </div>
            
        </div>
    </div>
</footer>`;

document.getElementById("piedepagina").innerHTML = piedepagina;
