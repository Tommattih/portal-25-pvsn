////////////Preloader
const preloader = document.querySelectorAll('#preloader');

function preload() {
  document.getElementById("preloader").classList.add('hidden');
}

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

//////////change type menu
function size() {
  window.addEventListener('load', function () {
    //var altura = window.innerHeight;
  var largura = window.innerWidth;
  const menu = document.getElementById("menu")
  
  if (largura <= 768) {
      menu.classList.add('hidden');
  }else{
    menu.classList.remove('hidden');
  }
});
}

//function open(event){
//  openMenu.addEventListener('click', classList.contains('hidden'))}
if (window.screen.width <= 1024 && window.screen.height >= 768) {
  // Resolution is 1024x768 or above
}