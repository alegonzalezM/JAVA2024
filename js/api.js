let todasLasPeliculas = [];
let paginaAPI = 1;
let paginaActual = 1;
const maximoDePeliculas = 32; // Número máximo de películas a obtener
const peliculasPorPagina = 12; // Número de películas por página
const apiKey = '8fa300a2';
// const urlBase = `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`;
const urlBase = `/peliculas.json`;



async function traer() {
    while (todasLasPeliculas.length < maximoDePeliculas) {
        try {
            const response = await fetch(`${urlBase}&page=${paginaAPI}`);
            const data = await response.json();

            if (data.Response === "True") {
                todasLasPeliculas = todasLasPeliculas.concat(data.Search);
                paginaAPI++;
            } else {
                console.error("Error en la búsqueda:", data.Error);
                break;
            }

        } catch (error) {
            console.error('Error:', error);
            break;
        }
    }
    mostrarPeliculas();
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
    if (fin >= todasLasPeliculas.length) {     //en ultima pagina boton anterior desactivado
        nextBtn.classList.add("disabled");    
    } else {
        nextBtn.classList.remove("disabled");
    }
    if (paginaActual === 1){                    //en pagina 1 boton sig desactivado
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }

    nextBtn.addEventListener('click', function() {
        foco();
    });
    prevBtn.addEventListener('click', function() {
        foco();
    });
}
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



