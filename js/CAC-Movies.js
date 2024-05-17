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
/*carga header en index y details.html con Vue*/
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
                  </ul>
                  <span class="btn-menu">
                    <i class="fa fa-bars" id="logo-bars"></i>
                  </span>
                  </nav>
                  
            </header> `}}} ).mount("#app");

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

// $(window).scroll(function() {
//   var scrollPos = $(window).scrollTop();
//   var triggerPos = 900; // 
  
//   if (scrollPos > triggerPos) {
//     $(".section__find").slideDown(1000);
//   } 
//   else {
//     $(".section__find").slideDown(5000);
//   }
// });


// $(document).ready(function(){    
// 	 $("#imagen").click(function(){
// 	 $(this).animate(
// 	 {marginLeft: "+=50px"}, 60); });});
// ----------------------------------------------------
//     $(document).ready(function(){
// 	    $("#imagen").mouseover(function(){
// 	    $(this).animate( { opacity:1 }, 250 ); });
// 	$("#imagen").mouseout(function(){
// 	    $(this).animate({ opacity:0.5} , 250 ); });});
// //-----------------------------------------------------------------
//         $(document).ready(function(){
// 			$("#titulo").hide();
// 			$("#imagen").width(60).height(40).click(function(){   //la imagen inicia pequeña
// 			$(this).animate({ 
// 			marginLeft: "10px", width: "200px", height: "200px"}, 1500, function(){
//                 $("#titulo").fadeIn(1000).delay(1000).fadeOut(1000);  
//             });});});  //1500 es el tiempo
//-----------------------------------------------------
