let mode = document.querySelector('.mode');
let container = document.querySelector('.countries .container');
let search = document.querySelector('.search input');
let dropdown = document.querySelector('.dropdown');
let regions = document.querySelector('.regions');
let x = document.querySelector('.nav-link-img');
let btn = document.querySelector('.bars-btn-img');

document.querySelector('input'). addEventListener('input',(e) => {
    e.target.style.backgroundSize = `${e.target.valu}% 100%`
});

let allCountries = [];

dropdown.addEventListener('click', () => {
    regions.classList.toggle('show');
});

// gsap.from('.header-logo-div', {
//     x: -500,
//     opcity:0,
//     duration: 1,
//     delay: 0.1
// })
// gsap.from('.header-list', {
//     y: -200,
//     opcity: 0.1,
//     duration: 1,
//     delay: 1
// })