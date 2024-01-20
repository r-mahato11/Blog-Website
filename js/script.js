let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('fa-time');
    searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
    searchIcon.classList.toggle('fa-time');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-time');
    searchForm.classList.remove('active');
}