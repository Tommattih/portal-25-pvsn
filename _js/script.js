////////////Preloader
const preloader = document.querySelectorAll('#preloader');

function preload() {
  document.getElementById("preloader").classList.add('hidden');
}

////////////menu
function openClose(){
let menuMobile = document.querySelector("#menu");
menuMobile
  if (menuMobile.classList.contains('hidden') == true){
    menuMobile.classList.remove('hidden');
    alert.log("mostrou ^^");

  }else{
    menuMobile.classList.add('hidden');
    alert.log("escondeu !!! ^^");
  }
}
