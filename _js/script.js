////////////Preloader
const preloader = document.querySelectorAll('#preloader');

function preload() {
  document.getElementById("preloader").classList.add('hidden');
}

//////////change type menu
window.addEventListener('resize', function () {
  //var altura = window.innerHeight;
  var largura = window.innerWidth;

  if (largura <= 768) {
      document.querySelector("#menu").classList.add('hidden');
  }else{
    document.querySelector("#menu").classList.remove('hidden');
  }
});

//////////color mode
const changeMode = document.querySelector("html");

function change(){
  if(changeMode.classList.contains('dark')){
    changeMode.classList.remove('dark');
    // alert("cavalo preto");        
  }else{
    changeMode.classList.add('dark');
    // alert("cavalo branco");    
  }
}

function darkLight(){
const sunMode = document.querySelector(".sun-theme");
const moonMode = document.querySelector(".moon-theme");

  if(changeMode.classList.contains('dark')){
    moonMode.classList.remove('switch');
    sunMode.classList.add('switch');
    // alert("dark ^^");
      
  }else{
    moonMode.classList.add('switch');
    sunMode.classList.remove('switch');
    // alert("light ^^");
  }
  change()
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