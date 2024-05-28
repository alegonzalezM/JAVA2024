
let todasLasPeliculas = [];
let paginaAPI = 1;
let paginaActual = 1;
const maximoDePeliculas = 33; // Número máximo de películas a obtener
const peliculasPorPagina = 12; // Número de películas por página
const urlBase = 'https://raw.githubusercontent.com/alegonzalezM/JAVA2024/main/pages/peliculas.json';

const traer_api = document.getElementById("btn_api");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

traer_api.addEventListener('click', function() {
    traer();
});

async function traer() {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();

        // Asumiendo que data es un array de películas
        todasLasPeliculas = data;
        mostrarPeliculas();
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarPeliculas() {
    const inicio = (paginaActual - 1) * peliculasPorPagina;
    const fin = inicio + peliculasPorPagina;
    const peliculasParaMostrar = todasLasPeliculas.slice(inicio, fin);

    let contenido = "";
    peliculasParaMostrar.forEach(pelicula => {
        let titulo = `${pelicula.Title}`.substring(0, 25);
        contenido += `
            <a href="details.html">
                <div class="picture-container-api">
                    <picture class="movie__pic rounded mx-auto">
                        <img src="${pelicula.Poster}" alt="${pelicula.Title}">
                    </picture>
                    <div class="nombre">${titulo}</div>
                </div>
            </a>
        `;
    });

    document.querySelector(".container__movies").innerHTML = contenido;

    // Desactivar/activar botones de navegación
    if (fin >= todasLasPeliculas.length) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }

    if (paginaActual === 1) {
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }
}

nextBtn.addEventListener('click', function() {
    cambiarPagina(1);
});

prevBtn.addEventListener('click', function() {
    cambiarPagina(-1);
});

function cambiarPagina(cambio) {
    paginaActual += cambio;
    mostrarPeliculas();
}

function foco() {
    var movieElement = document.getElementById('tendencias');
    if (movieElement) {
        movieElement.scrollIntoView({ behavior: 'smooth' });
    }
}


