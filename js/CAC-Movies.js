AOS.init({
    offset: 120,
    delay: 100,
    duration: 1000,
    easing: 'ease',

}); 
/*scroll suave p' pant tactiles*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*---------------------------------------------------*/ 
/*carga header en index con Vue*/
 const {createApp} = Vue;
      createApp({ 
        data(){
        return { cabecera: 
            `<header>
            <nav class="menu">
                <div id="logo" class="animate__animated animate__wobble"> 
                    <i class="fas fa-film" aria-hidden="true"></i>
                    <a class="brand" href="#">CAC-Movies</a>
                </div>
                  <ul class="menu-lista">
                    <li class="menu-lista-item">
                      <a class="nav-links" href="#tendencias">Tendencias</a>
                    </li>
                    <li class="menu-lista-item">
                      <a class="nav-links" href="./pages/register.html">Registrarse</a>
                    </li>
                    <li class="menu-lista-item" id="btn_login">
                      <a class="nav-links"  href="./pages/login.html">Iniciar sesión</a>
                    </li> 
                    <li class="menu-lista-item" id="btn_api">
                    <a class="nav-links"  href="./pages/index_api.html">Conexión API</a>
                  </li> 
                  </ul>
                  <span class="btn-menu">
                    <i class="fa fa-bars" id="logo-bars"></i>
                  </span>
                  </nav>
                  
            </header> `}}} ).mount("#app");
/*---------------------------------------------------*/ 
/*carga header en details.html con Vue*/
const {createApp_details} = Vue;
createApp({ 
  data(){
  return { cabecera_details: 
            `<header>
            <nav class="menu">
                <div id="logo" class="animate__animated animate__wobble"> 
                    <i class="fas fa-film" aria-hidden="true"></i>
                    <a class="brand" href="/index.html">CAC-Movies</a>
                </div>
                  <ul class="menu-lista">
                    <li class="menu-lista-item">
                      <a class="nav-links" href="/index.html#tendencias">Tendencias</a>
                    </li>
                    <li class="menu-lista-item">
                      <a class="nav-links" href="register.html">Registrarse</a>
                    </li>
                    <li class="menu-lista-item" id="btn_login">
                      <a class="nav-links"  href="login.html">Iniciar sesión</a>
                    </li> 
                    <li class="menu-lista-item" id="btn_api">
                    <a class="nav-links"  href="index_api.html">Conexión API</a>
                  </li> 
                  </ul>
                  <span class="btn-menu">
                    <i class="fa fa-bars" id="logo-bars"></i>
                  </span>
                  </nav>
                  
            </header>`}}} ).mount("#app_details");
/*---------------------------------------------------*/ 
/*carga footer en index y details.html con Vue*/

const foot= createApp({ 
  data(){
  return { footer: 
            `<footer>
            <nav class="navbar-footer fw-bold">
             
                <ul>
                    <li class="navbar_item"><a href="#" class="nav_link">Terminos y condiciones</a></li>
                    <li class="navbar_item"><a href="#" class="nav_link">Preguntas frecuentes</a></li>
                    <li class="navbar_item"><a href="#" class="nav_link">Ayuda</a></li>
                    <a href="#" class="nav_link"><li class="navbar_item" id="btn_login">Administrador películas</li></a>
        
                </ul>
                <div id="logo-footer"> 
                    <a href="#ancla" target="_self"><i class="fa fa-chevron-circle-up" ></i></a>
                  </div>
            </nav>
        </footer>`
  }}}).mount("#appFoot")

/*-----------------------------------------------*/


/*---------Activa y desactiva botones anterior y siguiente---------*/
// function actualizarBotones() {
//     const inicio = (paginaActual - 1) * peliculasPorPagina;
//     const fin = inicio + peliculasPorPagina;

//     if (fin >= todasLasPeliculas.length) {
//         nextBtn.classList.add("disabled");
//         nextBtn.disabled = true;
//     } else {
//         nextBtn.classList.remove("disabled");
//         nextBtn.disabled = false;
//     }

//     if (paginaActual === 1) {
//         prevBtn.classList.add("disabled");
//         prevBtn.disabled = true;
//     } else {
//         prevBtn.classList.remove("disabled");
//         prevBtn.disabled = false;
//     }
// }

// nextBtn.addEventListener('click', function() {
//     if (!this.disabled) {
//         cambiarPagina(1);
//     }
// });

// prevBtn.addEventListener('click', function() {
//     if (!this.disabled) {
//         cambiarPagina(-1);
//     }
// });

// function cambiarPagina(cambio) {
//     paginaActual += cambio;
//     mostrarPeliculas();
//     actualizarBotones();
// }

// /*-------------------------------*/

const btnMenu = document.querySelector(".btn-menu");
const menuLista = document.querySelector(".menu-lista");

btnMenu.addEventListener("click", function() {
    menuLista.classList.toggle("show");
});

/**********Validacion login*********************************/

document.getElementById('form_login').addEventListener('submit', function(e) {
 
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  const username = document.getElementById('user').value;
  const password = document.getElementById('passw').value;
  const userValidationMessage = document.getElementById('userValidationMessage');
  const passwValidationMessage = document.getElementById('passwValidationMessage');

    if (username === '') {
      userValidationMessage.textContent = 'Por favor, ingresa tu usuario.';
      userValidationMessage.style.display =  'block'; // Mostrar mensaje de validación
    }
    else {
        userValidationMessage.style.display = 'none'; // Ocultar mensaje de validación
    }
    if (password === '') {
      passwValidationMessage.textContent = 'Por favor, ingresa tu contraseña.';
      passwValidationMessage.style.display = 'block'; // Mostrar mensaje de validación

     } else {
      passwValidationMessage.style.display = 'none'; // Ocultar mensaje de validación
    }
    if (username !== '' && password !== '') {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login exitoso');
            // Redirigir a otra página o realizar otra acción
        } else {
            alert('Login fallido');
        }
    })
    .catch(error => console.error('Error:', error));
}
});

//-----------------------------------------------------
// const emailRegExp =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


