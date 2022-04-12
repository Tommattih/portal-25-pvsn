////////////Preloader
const preloader = document.querySelectorAll('#preloader');

function preload() {
  document.getElementById("preloader").classList.add('hidden');
}

//////////change type menu
window.addEventListener('resize', function () {
  //var altura = window.innerHeight;
  var largura = window.innerWidth;

  if (largura > 769) {
      document.querySelector("#menu").classList.remove('hidden');
  }else{
    document.querySelector("#menu").classList.add('hidden');
  }
});

//////////color mode
function darkLight(){
let colorMode = document.querySelector("#button-mode-desktop");
const sunMode = document.querySelector(".sun-theme");
const moonMode = document.querySelector(".moon-theme");

  if(colorMode.classList.contains('dark') == true){
    colorMode.classList.remove('dark');
    moonMode.classList.remove('switch');
    sunMode.classList.add('switch');
    alert("dark ^^");
      
  }else{
    colorMode.classList.add('dark');
    moonMode.classList.add('switch');
    sunMode.classList.remove('switch');
    alert("light ^^");
  }
}

////////////menu
function openClose(){
let menuMobile = document.querySelector("#menu");
  if (menuMobile.classList.contains('hidden') == true){
    menuMobile.classList.remove('hidden');

  }else{
    menuMobile.classList.add('hidden');
  }
}