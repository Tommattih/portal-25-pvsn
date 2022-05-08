## Portal 25ª PVSN -> [tommattih.github.io/portal-25-pvsn](https://tommattih.github.io/portal-25-pvsn)
### Versão Abril/2022
`:root{
    --bg-h1: #;
    --bg-header:#;
    --bg-title:#;
    --bg-container:#;
    --tex-title:#;
    --txt-header: #3A4315;
    --txt-light: #;
    --txt-dark: #;
    }`

---
### Versão BETA
**Cores da Página**

    bg: #455943;
    title: #e8beac;
    bgmain: #f5f5f5;
    section: #fff;
    text: #212b20;
    shaddow: #000;

**Updates**

- Ajustes nas informações e estrutura de apresentação.

- Conclusão da primeira etapa layout

- Melhorias estéticas, troca do botão de navegação para o topo da página

- Ajustes de responsividade {_mobile first_}

- Cor de fundo

- Adição de imagens, notícias, links e contador


**Referência**

Testes e combinações de aprendizado.

---
  --preloader: rgb(58, 67, 21);

  /* Set header */
  --bg-title-menu-solid: rgb(40, 54, 21);
  --bg-title-menu: rgba(40, 54, 21, .8);

  --bg-header-solid: rgb(113, 133, 55);
  --bg-header: rgba(113, 133, 55, 0.388);
  --bg-img-header: url("../_img/bgs-logo/bg-header.png");

  /* Set frames */
  --bg-frame-solid: rgb(137, 149, 102);
  --bg-frame-menu: rgba(255, 255, 255, 0.251);
  --bg-frame-section: rgba(119, 110, 21, 0.29);

  /* Set container */
  --bg-container-solid: rgba(15, 66, 25, 0.8);
  --bg-img-container: url("../_img/bgs-logo/bg-header.png");
  --bg-img-container-mobile: url(../_img/bgs-logo/bg-solo-mobile.png);


  --bg-section-solid: rgb(218, 218, 218);
  --bg-section: rgba(255, 255, 255, .8);
  --bg-section1: rgba(175, 175, 160, .8);
  --bg-section2: rgba(255, 255, 255, 0.6);

  /* Set mobile */
  --bg-menu-mobile: ;
  --bg-mobile-solid: rgb(15, 66, 25);
  --bg-img-mobile: url("../_img/bgs-logo/bg-solo-mobile.png");


  /* Set txt */
  --txt-header: rgb(240, 248, 255);
  --txt-p: #000;
  --txt-title: rgb(35, 75, 25);

  --txt-more: rgb(0, 5, 66);
  --txt-more1: rgb(7, 13, 82);
  --txt-more-shadow: 0px 0px 5px #c0ff00f0;

  /* Set shadow */
  --shadow1: -1px 1px 3px #fff;
  --shadow2: -2px 2px 2px rgb(70 40 9);
  --shadow3: -4px 4px 4px rgba(0 0 0 / 40%);
  --shadow4: -4px 4px 4px rgb(0 0 0 / 80%);
  --shadow5: 0 2px 4px black;
  --shadow6: -4px 0px 4px #000;
  --shadow7: -2px 2px 1px #ffffff69;

  --shadow8: -3px 3px 3px rgb(0 0 0 / 40%);
  --shadow9: -2px 2px 4px -1px rgb(10 10 10 / 40%);
  --shadow0: ;


  /* Set fonts */
  --font-title-h1: 'Encode Sans SC', sans-serif;
  --font-content-p: 'Poppins', sans-serif;
  --font-link: 'Montserrat', sans-serif;

  /* Test gradient */
  --gradient: linear-gradient(35deg, rgba(137, 149, 102, 1) 0%, rgba(113, 133, 55, 1) 50%, rgba(40, 54, 21, 1) 100%);

  --gradient1: linear-gradient(200deg, rgba(15, 65, 25, 1) 0%, rgba(40, 54, 21, 1) 45%, rgba(113, 133, 55, 1) 100%);

  --gradient2: linear-gradient(30deg, rgba(15, 66, 25, 1) 5%, rgba(40, 54, 21, 1) 50%, rgba(0, 5, 66, 1) 95%);
   **dark-menu**
  --gradient3: linear-gradient(15deg, rgba(15, 66, 25, 1) 0%, rgba(35, 75, 75, 1) 45%, rgba(66, 55, 117, 1) 100%);

  --gradient4: linear-gradient(15deg, rgba(254, 255, 108, 1) 0%, rgba(244, 154, 154, 1) 45%, rgba(66, 55, 117, 1) 100%);


  bg-solo-desk.png
  bg-header.png

  bg-solo-start-mobile.png


background: rgb(244 154 154);
linear-gradient(15deg, rgba(254,255,108,1) 0%, rgba(244,154,154,1) 45%, rgba(66,55,117,1) 100%);

background: rgb(15,66,25);
background: linear-gradient(15deg, rgba(15,66,25,1) 0%, rgba(35,75,25,1) 45%, rgba(66,55,117,1) 100%);

background: rgb(15,66,25);
background: linear-gradient(30deg, rgba(15,66,25,1) 5%, rgba(40,54,21,1) 50%, rgba(0,5,66,1) 95%);

background: rgb(15,65,25);
background: linear-gradient(200deg, rgba(15,65,25,1) 0%, rgba(40,54,21,1) 45%, rgba(113,133,55,1) 100%);

background: rgb(137,149,102);
background: linear-gradient(35deg, rgba(137,149,102,1) 0%, rgba(113,133,55,1) 50%, rgba(40,54,21,1) 100%);




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
function darkLight(){
const colorMode = document.querySelector("#button-mode-desktop");
const sunMode = document.querySelector(".sun-theme");
const moonMode = document.querySelector(".moon-theme");

  if(colorMode.classList.contains('dark')){
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

function change(){
  const changeMode = document.querySelector("html");
  const buttonMobileMode = document.querySelector(".button-mode-mobile");
  
  if(changeMode.classList.contains('dark')){
    changeMode.classList.remove('dark');
    alert("cavalo preto");        
  }else{
    changeMode.classList.add('dark');
    alert("cavalo branco");    
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

img png" loading="lazy">

https://grid.layoutit.com/