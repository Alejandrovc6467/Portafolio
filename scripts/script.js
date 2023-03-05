const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".header_nav_menu");


const header = document.querySelector(".header");/*Esto es solo por detalles de apararincias, pero no esnecesario */

//cunado le de click al navToggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("header_nav_menu_visible");//esto es todo este togle lo que hace es que si el elemento no tiene esa clase pues se la agrega y si la tiene se la quita y esa clase solo va estar disponible cuando la resolucion es menor a 785 y la configuracaion ya esta hecha en el css
  header.classList.toggle("header_new");/* ni esto, son solo detalles */
});



//ver que tal esto que acaba de hacer, si funciona
//pero no lo se, talvez lo quite jajaj
//si lo hago poner esta funcion en el addEventListener de todos los a y llamarla, mas facil
function x(){
  console.log("sirve");
  navMenu.classList.toggle("header_nav_menu_visible");//esto es todo este togle lo que hace es que si el elemento no tiene esa clase pues se la agrega y si la tiene se la quita y esa clase solo va estar disponible cuando la resolucion es menor a 785 y la configuracaion ya esta hecha en el css
  header.classList.toggle("header_new");/* ni esto, son solo detalles */
};