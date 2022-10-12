'use strickt';

//------------------------------------------
// HEADER MENU
//------------------------------------------
let menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
    let headerMenu = document.querySelector('.hidden_menu');
    headerMenu.classList.toggle('visible_hidden');
});

let headerMenu = document.querySelector('.hidden_menu');

headerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('visible_hidden');
});